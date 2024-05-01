import { Image, StyleSheet, View } from "react-native";
import Icon from "../../assets/Aina.jpeg";
import { Text } from "react-native";

export default function HomeScreen () {
  return (
    <View style={styles.container}>
        <Text> Welcome to HomeScreen</Text>
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
  });
  