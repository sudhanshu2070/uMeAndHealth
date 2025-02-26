import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LogoScreen from '../screens/LogoScreen';
import AboutYourselfScreen from '../screens/AboutYourselfScreen';
import { RootStackParamList } from '../utils/types';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;