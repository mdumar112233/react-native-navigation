import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ContactScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contact Screen</Text>
        {/* <Button 
          title='go to about'
          onPress={() => navigation.navigate('About', {
            name: 'hello umar fauk'
          })}
        /> */}
      </View>
    ); 
  }