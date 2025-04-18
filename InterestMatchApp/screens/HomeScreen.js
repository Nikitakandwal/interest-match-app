import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import axios from '../utils/api';

export default function HomeScreen({ route, navigation }) {
  const { email } = route.params;
  const [user, setUser] = useState({ name: '', email });
  const [match, setMatch] = useState(null);
  const [noMatch, setNoMatch] = useState(false);
  const [shownMatches, setShownMatches] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/user?email=${email}`);
        setUser(res.data);  
      } catch (error) {
        Alert.alert('Failed to fetch user info');
      }
    };
  
    fetchUser();
    findMatch();
  }, []);
  

  const findMatch = async () => {
    try {
      const excludeList = [email, ...shownMatches];  
      const res = await axios.get(`/match`, {
        params: { email, exclude: excludeList.join(',') },
      });
  
      if (res.data.message === 'No match') {
        setNoMatch(true);
        setMatch(null);
      } else {
        setMatch(res.data);
        setShownMatches(prev => [...prev, res.data.email]);
        setNoMatch(false);
      }
    } catch (error) {
      Alert.alert('Error fetching match');
    }
  };
  

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
    <View style={styles.topRow}>
      <Text style={styles.title}>Welcome, {user.name}</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  
    <View style={styles.content}>
      {match && (
        <View style={styles.card}>
          <Text style={styles.matchName}>{match.name}</Text>
          <Text style={styles.matchEmail}>{match.email}</Text>
          <Text style={styles.interests}>Interests: {match.interests.join(', ')}</Text>
        </View>
      )}
  
      {noMatch && (
        <Text style={styles.noMatchText}>No match found...</Text>
      )}
    </View>
  
    <View style={styles.bottomButton}>
      <TouchableOpacity style={styles.button} onPress={findMatch}>
        <Text style={styles.buttonText}>{match ? 'Next Match' : 'Show Match'}</Text>
      </TouchableOpacity>
    </View>
  </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4FF',
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6C5CE7',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#6C5CE7',
    marginTop: 20,
  },
  matchName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6B81',
    marginBottom: 5,
  },
  matchEmail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  interests: {
    fontSize: 16,
    color: '#333',
  },
  noMatchText: {
    marginTop: 20,
    color: 'gray',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6C5CE7',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutText: {
    marginRight: 10,
    color: '#FF6B81',
    fontWeight: 'bold',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,  
    marginBottom: 30,
  },
  content: {
    flex: 1,
  },
  
  bottomButton: {
    marginBottom: 30,
  },
  
  
});
