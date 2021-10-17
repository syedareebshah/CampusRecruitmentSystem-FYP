import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Navigation from './src/config/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';


const App = () => {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
