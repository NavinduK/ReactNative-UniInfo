import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [change,setChange] = useState("Navindu K");

  return (

      <LinearGradient colors={['#2C148B', '#684BB7', '#AA76D8']} style={styles.container}>
        <Text>{change}</Text>
        <StatusBar style="auto" />
      </LinearGradient>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});