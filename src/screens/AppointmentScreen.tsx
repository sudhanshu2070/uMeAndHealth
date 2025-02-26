import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AppointmentScreen: React.FC = () => {
  const [doctor, setDoctor] = useState('');
  const [timing, setTiming] = useState('');

  // Sample data for doctors and timings
  const doctors = ['Dr. John Doe', 'Dr. Jane Smith', 'Dr. Emily Johnson'];
  const timings = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Schedule an Appointment</Text>

      <View style={styles.inputContainer}>
        <Picker
          selectedValue={doctor}
          onValueChange={(itemValue) => setDoctor(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Doctor" value="" />
          {doctors.map((doctor) => (
            <Picker.Item key={doctor} label={doctor} value={doctor} />
          ))}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Picker
          selectedValue={timing}
          onValueChange={(itemValue) => setTiming(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Timing" value="" />
          {timings.map((timing) => (
            <Picker.Item key={timing} label={timing} value={timing} />
          ))}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          keyboardType="default"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Reason for Appointment"
          style={styles.input}
          keyboardType="default"
        />
      </View>

      <Button title="Submit" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', // Light grey background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark text for contrast
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff', // White input field for contrast
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd', // Light grey border
  },
  picker: {
    backgroundColor: '#fff', // White picker for contrast
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd', // Light grey border
    width: '100%',
  },
});

export default AppointmentScreen;