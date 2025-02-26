import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoScreen from '../screens/LogoScreen';

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;