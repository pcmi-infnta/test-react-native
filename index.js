/**
 * @format
 */
import 'setimmediate';
import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import App from './App';

const Main = () => (
  <>
    <StatusBar hidden={true} />
    <App />
  </>
);

AppRegistry.registerComponent('main', () => Main);