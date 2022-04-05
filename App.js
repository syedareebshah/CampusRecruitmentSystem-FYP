import React from 'react';
import Navigation from './src/config/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { NativeBaseProvider} from "native-base";



const App = () => {
  return (
    <NativeBaseProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </NativeBaseProvider>
  );
};


export default App;
