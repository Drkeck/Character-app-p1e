import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GetStarted from './src/Get-Started';

export default function App() {
  return (
    <View style={styles.container}>
      <GetStarted style={styles.Button}></GetStarted>
      <Button
        style={styles.button}
        title="test"
      />
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
  Button: {
    margin: 10,
    color: "#de5050"
  },

});  