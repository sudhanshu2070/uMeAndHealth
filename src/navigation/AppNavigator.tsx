import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LogoScreen from '../screens/LogoScreen';
import AboutYourselfScreen from '../screens/AboutYourselfScreen';
import { RootStackParamList } from '../utils/types';
import LoginScreen from '../screens/login/LoginScreen';
import SignUpScreen from '../screens/signUp/SignUpScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoScreen">
        <Stack.Screen 
            name="LogoScreen" 
            component={LogoScreen}
            options={{
                headerShown: false,
              }}
        />
        <Stack.Screen name="AboutYourself" component={AboutYourselfScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;