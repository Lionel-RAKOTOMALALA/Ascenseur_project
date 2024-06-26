import { Image, StyleSheet, View } from "react-native";
import Icon from "../../assets/Aina.jpeg";

export default function SplashScreenView () {
  return (
    <View style={styles.container}>
        <View>
            <Image source={Icon} style={styles.image}/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image : {
        width: 400,
        height: 600,
        resizeMode: "cover",
    }
  });
  