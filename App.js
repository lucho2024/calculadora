import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Principal from './src/screens/Principal';
import Result from './src/screens/Result';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Principal} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
