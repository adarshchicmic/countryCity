import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './src/screen/ProfileScreen';
import HomeScreen from './src/screen/HomeScreen';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Country'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;