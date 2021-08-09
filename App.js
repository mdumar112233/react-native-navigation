import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigatorContainer from './Screen/StackNavigatorContainer';
import TabNavigation from './Screen/TabNavigation';
// import { BrowserRouter } from 'react-router-dom';



export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation/>
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
