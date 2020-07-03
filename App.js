import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from './assets/logo.png'; 


export default function App() {
  
  return (
    <View >
      <ScrollView>
        <LinearGradient colors={['#2C148B', '#684BB7', '#AA76D8']} style={styles.container}>
          <Image source={logo} style={{ height: 120, resizeMode: 'contain', margin:10 }} />
          <Text style={styles.title}>Faculty of Science</Text>
          <Text style={styles.title}>University of Peradeniya</Text>
          <View style={styles.innercontent}>
            <View style={[styles.border,{marginTop:25 }]}>
              <Text style={[styles.subtitle,styles.textfill]}>Dean</Text>
              <Text style={styles.para1}>Prof. Saluka R. Kodituwakku</Text>
            </View>
            <View style={[styles.border,]}>
              <Text style={[styles.subtitle,styles.textfill]}>Departments and Units</Text>
              <Text style={styles.para1}>Department of Statistics and Computer Science</Text>
              <Text style={styles.para1}>Department of Molecutar Biology and Biotechnology</Text>
              <Text style={styles.para1}>Department of Mathematics</Text>
              <Text style={styles.para1}>Department of Physics</Text>
              <Text style={styles.para1}>Department of Chemistry</Text>
              <Text style={styles.para1}>Department of Geology</Text>
              <Text style={styles.para1}>Department of Botany</Text>
              <Text style={styles.para1}>Department of Zoology</Text>
              <Text style={styles.para1}>English Language Teaching Unit</Text>
              <Text style={styles.para1}>Science Education Unit</Text>
            </View>
            <View style={[styles.border,]}>
              <Text style={[styles.subtitle,styles.textfill]}>Student Societies</Text>
              <Text style={styles.para1}>Computer Society</Text>
              <Text style={styles.para1}>Operations Research Society</Text>
              <Text style={styles.para1}>Art Circle of Faculty of Science</Text>
              <Text style={styles.para1}>Buddhist Brotherhood</Text>
              <Text style={styles.para1}>Hantana Conservation Society</Text>
              <Text style={styles.para1}>University Explorers' Club</Text>
              <Text style={styles.para1}>Perabeats (Media Partner) </Text>
              <Text style={styles.para1}>Rotaract Club</Text>
              <Text style={styles.para1}>University Geological Society</Text>
              <Text style={styles.para1}>Zoologists' Association</Text>
            </View>
            <View style={[styles.border,]}>
              <Text style={[styles.subtitle,styles.textfill]}>https://sci.pdn.ac.lk/</Text>
            </View>
          </View>
          <StatusBar style="light" hidden={true} />
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold',
  },
  subtitle:{
    color:'#fff',
    fontSize:19,
    fontWeight:'bold',
    textAlign:'center'
  },
  para1:{
    color:'#fff',
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
  },
  border:{
    padding:5,
    margin:10,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 4,
  },
  innercontent:{
    width: "100%",
  },
  textfill:{
    padding:4,
    backgroundColor:"#fff",
    color: "#684BB7",
    borderRadius: 4,
  }
});