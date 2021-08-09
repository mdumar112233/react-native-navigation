import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ContactStackNavigator, StackNavigatorContainer } from './StackNavigatorContainer';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return(
      <Tab.Navigator>
        <Tab.Screen name="Home" options= {{headerShown: false,}} component={StackNavigatorContainer} />
        <Tab.Screen name="Contact" options= {{headerShown: false,}} component={ContactStackNavigator} />
      </Tab.Navigator>
    )
  }
  