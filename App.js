import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Movies from './components/Movies';
import MoviesDetails from './components/MoviesDetails';
import Test from './components/test';
// or any pure javascript modules available in npm

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        
 
        <Stack.Navigator>
          <Tab.Screen name="Movies" component={Movies} />
          <Tab.Screen name="Example" component={AssetExample} />
          <Stack.Screen name="Details" component={MoviesDetails} />
          <Tab.Screen name="Test" component={Test} />
        </Stack.Navigator>

      </NavigationContainer>
    </View>
  );
}

       // <Tab.Navigator>
          // <Tab.Screen name="Example" component={AssetExample} />
          // <Tab.Screen name="Movies" component={Movies} />
          // // <Tab.Screen name="Details" component={MoviesDetails} />
        
        // </Tab.Navigator>



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});
