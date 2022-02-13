import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Login from './src/Login/Login';

/**
 * It renders the Login component.
 * @returns A view with a background color of white and a child of the Login component.
 */
const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </View>
  );
};

export default App;
