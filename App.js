import React from 'react';
import { StyleSheet, View } from 'react-native';
import Titulo from './src/components/title/index.js';
import Main from './src/components/Main/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Main/>
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
