import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './src/Get-Started';

export default function App() {
  return (
    <View style={styles.container}>
      <GetStarted></GetStarted>
      <StatusBar 
        translucent={true}
        animated={true}
      />
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
