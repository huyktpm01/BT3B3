import React from 'react';
import { View, TextInput, Button, Dimensions, KeyboardAvoidingView, StyleSheet } from 'react-native';

const KeyboardScreen = () => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <TextInput
        style={[styles.input, { width: windowWidth * 0.8 }]}
        placeholder="Enter text"
      />
      <Button title="Submit" onPress={() => {}} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
});

export default KeyboardScreen;
