import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const HomeScreen = () => {
  // Get the current day of the week
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[new Date().getDay()];

  return (
    <View style={styles.container}>
      {/* Day of the Week */}
      <View style={styles.header}>
        <Text style={styles.dayText}>{currentDay}</Text>
      </View>

      {/* Main Content (You can add your content here) */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        {/* Home Icon */}
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={28} color="#64b5f6" />
        </TouchableOpacity>

        {/* Discover Icon */}
        <TouchableOpacity style={styles.navItem}>
          <Icon name="compass" size={28} color="#999" />
        </TouchableOpacity>

        {/* Add Button (Centered) */}
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={32} color="#fff" />
        </TouchableOpacity>

        {/* Insights Icon */}
        <TouchableOpacity style={styles.navItem}>
          <Icon name="chart-bar" size={28} color="#999" />
        </TouchableOpacity>

        {/* Profile Icon */}
        <TouchableOpacity style={styles.navItem}>
          <Icon name="account" size={28} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    color: '#555',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingHorizontal: 10,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#64b5f6',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: -30, // Lift the button up
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HomeScreen;