import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function NotFoundScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>없음</Text>
            <Link href="/" replace style={styles.button}>asdf</Link>
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