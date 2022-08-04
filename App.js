import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // cream: #f4e9cd,
  // yellow: #ffe66d,
  // brown: #b87d4b,
  // green: #428a5a,
  // sea: #77aca2, 
  // blue: #004266, 
  // black: #292929, 
  // red: #dc4141, 
  // white: F5F5F5
});
