import React, { useEffect } from "react";
import { URL, URLSearchParams } from "react-native-url-polyfill";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantsFromApi = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("location_id", "15333482");
    encodedParams.append("language", "en_US");
    encodedParams.append("currency", "USD");
    encodedParams.append("limit", "15");

    const url = "https://worldwide-restaurants.p.rapidapi.com/photos";

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "6bdd7bd414msh458a80afddaaf1bp1ba476jsn5b8e57a10363",
        "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
      },
      body: encodedParams,
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    getRestaurantsFromApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "white", padding: 12 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#eee",
  },
});

export default Home;
