/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';


import AnimatedLoader from './Component/AnimatedLoader';


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
     <AnimatedLoader/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
flex:1,
  },
});

export default App;
