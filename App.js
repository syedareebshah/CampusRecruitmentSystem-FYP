import React from 'react';
import Navigation from './src/config/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';


const App = () => {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};


export default App;
