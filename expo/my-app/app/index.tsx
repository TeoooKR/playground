import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Heelo</Text>
      <Link href="/about" style={styles.button}>      
        About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({     
  container: {   
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  text: {
    color: '#fff'
  },
  button: {
    textDecorationLine: 'underline',
    color: '#fff',
    fontSize: 22
  }
})