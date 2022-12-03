/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import COLORS from './src/utils/colors';
import {Provider} from 'react-redux';
import store from './src/store';
import RootStack from './src/navigation-stack/root-stack';
import {navigatorRef} from './src/utils/navigation';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={COLORS.BLACK}
          barStyle={'dark-content'}
          translucent={false}
        />
        <NavigationContainer ref={navigatorRef}>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});

export default App;
