import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';

const Stack = createNativeStackNavigator();

// const screenOptionStyle = {
//   title: 'Home',
//   headerStyle: {
//     backgroundColor: '#f4511e',
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// }

function StackNavigator() {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
          />
          <Stack.Screen 
            name="About" 
            component={AboutScreen}
          />
        </Stack.Navigator>
    );
  }

 function ContactStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    );
  }
  
  export { StackNavigator, ContactStackNavigator };



