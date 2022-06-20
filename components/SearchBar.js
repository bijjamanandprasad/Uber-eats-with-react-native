import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

function SearchBar(props) {
  return (
    <View style={{ marginTop: 15, flexDirection:"row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={22}></Ionicons>
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              right: 6,
              padding: 9,
              borderRadius: 38,
              alignItems:"center"

            }}
          >
            <AntDesign name="clockcircle" size={11} style={{marginRight:6}}/>
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

export default SearchBar;
