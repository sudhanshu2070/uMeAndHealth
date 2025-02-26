import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type LogoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LogoScreen'>;

import logo from '../../assets/logo_circle.png';
import { RootStackParamList } from '../utils/types';

const LogoScreen: React.FC = () => {
  const navigation = useNavigation<LogoScreenNavigationProp>(); // Use the navigation hook
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the spin value from 0 to 1
    const spin = Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    });

    spin.start(() => {
      spinValue.setValue(0);
      // After the animation completes, navigate to the LoginScreen
      navigation.navigate('AboutYourself');
    });
  }, [navigation]);

  // Interpolate the spin value to convert it to a rotation angle
  const spinInterpolate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '0deg'], //Not roataing the image for now
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={logo}
        style={[
          styles.logo,
          {
            transform: [{ rotate: spinInterpolate }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 350,
    height: 350,
  },
});

export default LogoScreen;