import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (!email) {
      Alert.alert('Email is required');
      return;
    }
    navigation.navigate('Home', { email });
  };

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#B5838D"
      />
      <View style={styles.buttonWrapper}>
        <Button title="Login" onPress={handleLogin} color="#FF758F" />
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={goToSignup}>
          <Text style={styles.signupLink}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF0F5',  
    flex: 1,
    justifyContent: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#C06C84', 
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#D8A7B1',  
    marginBottom: 25,
    paddingVertical: 10,
    paddingHorizontal: 6,
    fontSize: 16,
    color: '#4A4A4A',
  },
  buttonWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#FF758F',
    elevation: 2,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    fontSize: 14,
    color: '#7D5A64',
  },
  signupLink: {
    fontSize: 14,
    color: '#FF758F',
    fontWeight: 'bold',
  },
});
