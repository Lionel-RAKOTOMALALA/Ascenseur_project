import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import background from "../../assets/bkg.jpg";
import backgroundAbstract from "../../assets/abstract.png";
import { BlurView } from "expo-blur";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={background}/>
      <Image style={styles.backgroundAbstractImage} source={backgroundAbstract} />
      <BlurView intensity={95} style={styles.contentBlur}>
        <Text>Lionel</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    height: "100%",
    width: undefined,
    aspectRatio: 1,
    zIndex: 1,
    resizeMode: 'cover',  
  },
  backgroundAbstractImage: {
    position: "absolute",
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    zIndex: 5,
  },
  contentBlur: {
    marginTop:'20%',
    borderColor:'#fff',
    borderWidth:2,
    borderRadius: 20, // Ajout du borderRadius
    width: 365,
    height: 300,
  },
});
