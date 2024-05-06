import React, { useState, useEffect } from "react";
import { Text, Alert, Image, StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import Button from "../components/Button";
import background from "../../assets/bkg.jpg";
import backgroundAbstract from "../../assets/abstract.png";

export default function HomeScreen() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Alert.alert(theme);
  }, [theme]);

  return (
    <View style={styles.container}>
      <Image
        style={[styles.backgroundImage, StyleSheet.absoluteFill]}
        source={background}
      />
      <Image
        style={styles.backgroundAbstractImage}
        source={backgroundAbstract}
      />

      <View style={styles.contentContainer}>
        {/* Contenu à gauche du BlurView */}
        <View style={styles.leftContent}>
          <Text>Contenu</Text>
        </View>

        {/* BlurView avec les boutons */}
        <BlurView intensity={100} blurType="light" style={styles.contentBlur}>
          <View style={styles.buttonContainer}>
            <Button isGray title={1} onPress={() => { Alert.alert("1"); }} />
            <Button isGray title={2} onPress={() => { Alert.alert("2"); }} />
            <Button isGray title={3} onPress={() => { Alert.alert("3"); }} />
            <Button isGray title={4} onPress={() => { Alert.alert("4"); }} />
            <Button isGray title={5} onPress={() => { Alert.alert("5"); }} />
            <Button isGray title={6} onPress={() => { Alert.alert("6"); }} />
          </View>
        </BlurView>
      </View>
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
    resizeMode: "cover",
  },
  backgroundAbstractImage: {
    position: "absolute",
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    zIndex: 5,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
     marginTop: 250,
  },
  leftContent: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  contentBlur: {
    borderRadius: 20,
    width: 250,
    height: 400,
    padding: 20,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-between",
  },
});
