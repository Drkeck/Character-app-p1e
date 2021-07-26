import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CharacterSheet from './src/character-sheet';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <CharacterSheet />
      <StatusBar style="auto"/>
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