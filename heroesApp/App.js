/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import NavigatorContainer from './src/nav/NavigatorContainer';
import store from './src/redux/store/AppStore'
import NetInfo from "@react-native-community/netinfo";

const App = () => {

  const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Connection type', state.type);
    console.log("Is connected?", state.isConnected);
  })
  

  return (
    <Provider store={store}>
      <NavigatorContainer />
    </Provider>
  );
};

export default App;
