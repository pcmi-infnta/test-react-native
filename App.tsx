import React from 'react';
import { Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello Testing Fullscreen!</Text>
      </View>
    </>
  );
}