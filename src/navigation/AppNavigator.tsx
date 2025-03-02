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

// Creating a stack navigator with the defined route parameters
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    // Wrap the navigator in a NavigationContainer to manage navigation state
    <NavigationContainer>
      {/* Define the stack navigator and set the initial route */}
      <Stack.Navigator initialRouteName="LogoScreen">
        {/* Define each screen in the stack navigator */}
        <Stack.Screen 
            name="LogoScreen" 
            component={LogoScreen}
            options={{
                headerShown: false, // Hide the header for the LogoScreen
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
            title: 'Schedule an Appointment', // Set the title for the AppointmentScreen
            headerStyle: {
              height: 110, // Set the height of the header
            },
            headerTitleStyle: {
              fontSize: 22, 
              fontWeight: 'bold',
              fontFamily: 'Roboto',
              color: '#818589', // Set the color of the header title
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Export the AppNavigator component as the default export
export default AppNavigator;