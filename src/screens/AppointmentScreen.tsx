import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AppointmentScreen = () => {
  // State variables
  const [forSelf, setForSelf] = useState<'self' | 'other'>('self');
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [doctor, setDoctor] = useState('');
  const [timing, setTiming] = useState('');
  const [reason, setReason] = useState('');

  // Dummy data for doctors and timings
  const doctors = ['Dr. John Doe', 'Dr. Jane Smith', 'Dr. Emily White'];
  const timings = [
    'Today - 10:00 AM',
    'Today - 2:00 PM',
    'Tomorrow - 11:00 AM',
    'Custom - Select Date',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Schedule an Appointment</Text>

      {/* For Self or Other */}
      <View style={styles.section}>
        <Text style={styles.label}>Appointment For:</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={[styles.radioButton, forSelf === 'self' && styles.radioButtonSelected]}
            onPress={() => setForSelf('self')}
          >
            <Text style={styles.radioText}>Self</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, forSelf === 'other' && styles.radioButtonSelected]}
            onPress={() => setForSelf('other')}
          >
            <Text style={styles.radioText}>Other</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Patient's Full Name */}
      <View style={styles.section}>
        <Text style={styles.label}>Patient's Full Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter full name"
          value={patientName}
          onChangeText={setPatientName}
        />
      </View>

      {/* Age */}
      <View style={styles.section}>
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter age"
          keyboardType="numeric"
          value={age}
          onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ''))}
        />
      </View>

      {/* Gender */}
      <View style={styles.section}>
        <Text style={styles.label}>Gender:</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={[styles.radioButton, gender === 'Male' && styles.radioButtonSelected]}
            onPress={() => setGender('Male')}
          >
            <Text style={styles.radioText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, gender === 'Female' && styles.radioButtonSelected]}
            onPress={() => setGender('Female')}
          >
            <Text style={styles.radioText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, gender === 'Other' && styles.radioButtonSelected]}
            onPress={() => setGender('Other')}
          >
            <Text style={styles.radioText}>Other</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Doctor Selection */}
      <View style={styles.section}>
        <Text style={styles.label}>Select Doctor:</Text>
        <Picker
          selectedValue={doctor}
          onValueChange={(itemValue) => setDoctor(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a doctor" value="" />
          {doctors.map((doc, index) => (
            <Picker.Item key={index} label={doc} value={doc} />
          ))}
        </Picker>
      </View>

      {/* Timing Selection */}
      <View style={styles.section}>
        <Text style={styles.label}>Available Timing:</Text>
        <Picker
          selectedValue={timing}
          onValueChange={(itemValue) => setTiming(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a timing" value="" />
          {timings.map((time, index) => (
            <Picker.Item key={index} label={time} value={time} />
          ))}
        </Picker>
      </View>

      {/* Reason for Appointment */}
      <View style={styles.section}>
        <Text style={styles.label}>Reason for Appointment:</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Enter reason for appointment"
          multiline
          numberOfLines={4}
          value={reason}
          onChangeText={setReason}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Book Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  radioButtonSelected: {
    backgroundColor: '#6A5ACD',
    borderColor: '#6A5ACD',
  },
  radioText: {
    fontSize: 14,
    marginLeft: 5,
    color: '#333',
  },
  picker: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  submitButton: {
    backgroundColor: '#6A5ACD',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AppointmentScreen;