import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import logo from '../../assets/uMeAndHealth.png';

const LogoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
        resizeMode="contain"
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
    width: 150, 
    height: 150,
  },
});

export default LogoScreen;