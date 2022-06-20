import React from 'react';
import { View, SafeAreaView, Text, Platform, StatusBar, StyleSheet  } from 'react-native';
import Home from "./screens/Home"
function App(props) {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default App;
