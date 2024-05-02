import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';
// import { StyleSheet,Text, View } from 'react-native';
import HomeScreen from './src/components/HomeScreen'
import SplashScreen from './src/components/SplashScreenView';
export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() =>{
    setTimeout(()=>{
      setIsShowSplash(false);
    },3000);
  },[])
  return (
  <>
  <SafeAreaView style={styles.safeContainer}>
    <StatusBar style="a uto" />
    {isShowSplash ? <SplashScreen /> : <HomeScreen />}
  </SafeAreaView>
  </>)
}

const styles = StyleSheet.create({
  safeContainer:{
    flex : 1,
  },
})
