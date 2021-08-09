import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import TabNavigation from './Screen/TabNavigation';
// import { BrowserRouter } from 'react-router-dom';
import DrawerNavigator from './Screen/DrewerNavigation';


export default function App() {
  return (
    <NavigationContainer>
      {/* <TabNavigation/> */}
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
