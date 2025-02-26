import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LogoScreen from '../screens/LogoScreen';
import AboutYourselfScreen from '../screens/AboutYourselfScreen';
import { RootStackParamList } from '../utils/types';
import LoginScreen from '../screens/login/LoginScreen';
import SignUpScreen from '../screens/signUp/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import AppointmentScreen from '../screens/AppointmentScreen';

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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen 
          name="AppointmentScreen" 
          component={AppointmentScreen} 
          options={{
            title: 'Schedule an Appointment',
            headerStyle: {
              height: 110,
            },
            headerTitleStyle: {
              fontSize: 22, 
              fontWeight: 'bold',
              fontFamily: 'Roboto',
              color: '#818589', 
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;