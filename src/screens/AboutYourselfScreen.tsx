import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/types';

type AboutYourselfScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AboutYourself'>;

const AboutYourselfScreen: React.FC = () => {
  const navigation = useNavigation<AboutYourselfScreenNavigationProp>();

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState<number | null>(null);

  const genders = ['Male', 'Female', 'Other'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Tell me more about yourself</Text>

      {/* Age Picker */}
      <Picker
        selectedValue={age}
        onValueChange={(itemValue) => setAge(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Your Age" value="" />
        {[...Array(100).keys()].map((age) => (
          <Picker.Item key={age} label={age.toString()} value={age.toString()} />
        ))}
      </Picker>

      {/* Gender Picker */}
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Your Gender" value="" />
        {genders.map((gender) => (
          <Picker.Item key={gender} label={gender} value={gender} />
        ))}
      </Picker>

      {/* Weight Picker */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Your Weight</Text>
        <Picker
          selectedValue={weight ? weight.toString() : ''}
          onValueChange={(itemValue: string) => setWeight(itemValue ? parseInt(itemValue, 10) : null)}
          style={styles.picker}
        >
          <Picker.Item label="Select" value="" />
          {[50, 60, 70, 80, 90, 100].map((weight) => (
            <Picker.Item key={weight} label={weight.toString()} value={weight.toString()} />
          ))}
        </Picker>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  skipButton: {
    alignSelf: 'flex-end',
    margin: 10,
  },
  skipButtonText: {
    color: '#6A5ACD',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  sliderContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: '#6A5ACD',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginVertical: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AboutYourselfScreen;