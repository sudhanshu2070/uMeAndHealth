import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn } from 'react-native-reanimated';

const ProfileSetupScreen = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '', gender: '', height: '', weight: '', conditions: [], goals: '', preferences: [],
  });

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Animated.View entering={FadeIn}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={formData.age}
              onChangeText={(text) => setFormData({ ...formData, age: text })}
            />
            <Text style={styles.label}>Gender</Text>
            <View style={styles.toggleContainer}>
              {['Male', 'Female', 'Other'].map((g) => (
                <TouchableOpacity
                  key={g}
                  style={[styles.toggle, formData.gender === g && styles.toggleActive]}
                  onPress={() => setFormData({ ...formData, gender: g })}
                >
                  <Text>{g}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        );
      // Add cases for other steps (Body Stats, Health & Goals, Preferences)
      default:
        return null;
    }
  };

  return (
    <LinearGradient colors={['#00C4B4', '#4A90E2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Let’s Get to Know You</Text>
        <Text style={styles.subHeader}>Crafting your perfect meal plan starts here.</Text>
        <View style={styles.stepper}>
          <Text>Step {step} of 4</Text>
        </View>
        {renderStep()}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => setStep(step < 4 ? step + 1 : 4)}
        >
          <Text style={styles.nextButtonText}>
            {step === 4 ? 'Finish Setup' : 'Next'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 20, alignItems: 'center' },
  header: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: 40 },
  subHeader: { fontSize: 16, color: '#ddd', marginBottom: 20 },
  stepper: { marginBottom: 20, color: '#fff' },
  label: { fontSize: 18, color: '#fff', marginVertical: 10 },
  input: { backgroundColor: '#fff', borderRadius: 8, padding: 10, width: '80%' },
  toggleContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '80%' },
  toggle: { padding: 10, borderRadius: 8, backgroundColor: '#ddd' },
  toggleActive: { backgroundColor: '#00C4B4' },
  nextButton: { backgroundColor: '#fff', padding: 15, borderRadius: 25, marginTop: 20 },
  nextButtonText: { color: '#00C4B4', fontSize: 18, fontWeight: 'bold' },
});

export default ProfileSetupScreen;