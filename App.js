/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainRoute from './android-folders/Navigation/Route'
import { StyleSheet, View, Text, StatusBar } from 'react-native';


const App: () => React$Node = () => {
  return (
    <>
      {/* <StatusBar backgroundColor='#F61F1F' barStyle='light-content' /> */}
      <MainRoute />
    </>);
};


export default App;
