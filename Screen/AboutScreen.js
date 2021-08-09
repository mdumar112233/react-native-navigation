import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function AboutScreen({route, navigation}) {
    const {name} = route.params;
    console.log(name);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Text>{name}</Text>
        {/* <Button 
          title='go to home'
          onPress={() => navigation.push('HomeScreen', {
            name: 'faruk kahn'
          })}
        /> */}
      </View>
    );
  }

