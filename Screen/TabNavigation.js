import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ContactStackNavigator, StackNavigator } from './StackNavigatorContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

 const TabNavigation = () =>  {
  console.log(ContactStackNavigator)
    return(
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" options= {{headerShown: false}} component={StackNavigator} />
        <Tab.Screen name="Contact" options= {{headerShown: false}} component={ContactStackNavigator} />
      </Tab.Navigator> 
    )
  }

  export default TabNavigation
  