import React from 'react';
import { StyleSheet, View } from 'react-native';
import Titulo from './src/components/title/';
import Form from './src/components/Form/';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flex: 1,
    backgroundColor: '#FFDEAD',
    marginTop:30,
  },
});
