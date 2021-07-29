import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CharacterSheet from './src/character-sheet';
import background from './assets/background.jpg'
import { styles } from './styles';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <View style={styles.container}>
          <ImageBackground source={background} resizeMode="cover" style={styles.image}>
          <CharacterSheet />
          <StatusBar style={styles.status}/>
          </ImageBackground>
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}