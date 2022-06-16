import React from "react";
import { 
  StyleSheet, View, 
  Text,Image, SafeAreaView, TouchableOpacity, TouchableNativeFeedback, Button, Platform, StatusBar
} from "react-native";

import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
export default function App() {
  return (
    <SafeAreaView style={styles.container}
    >
      <Text>Power of a Tiger</Text>
      <TouchableOpacity>
        <Image 
          fadeDuration={5000}
          source={{
            width:200,
            height:300,
            uri:"https://picsum.photos/200/300"
          }}/>
      </TouchableOpacity>
      <TouchableNativeFeedback>
        <View style={{ width:200, height:50, backgroundColor:"dodgerblue", margin:5}}>
        </View>
      </TouchableNativeFeedback>
      <Button color="orange" title="Explore" onPress={()=>alert('button tapped')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"lightblue",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});