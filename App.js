import React from 'react';
import Navigation from './src/config/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux'
import { store } from './src/redux/store';



const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </NativeBaseProvider>
    </Provider>
  );
};


export default App;
