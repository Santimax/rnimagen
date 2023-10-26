import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './app.css';
import Card from './Card';
import React from 'react';
import central from './imgs/central_perk_logo.jpeg';

export default function App() {
  return (
    <View style={styles.container}>
      
      <img className='image' src={central}/>
      <Text style={styles.container}>
        <h3>Try some of our most popular flavors!</h3>
        <div>
          <Card/>
        </div>
      </Text>
      <StatusBar style="auto" />
    </View>
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

