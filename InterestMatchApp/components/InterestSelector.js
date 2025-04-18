import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const INTERESTS = ['Music', 'Fitness', 'Travel', 'Movies', 'Gaming', 'Books', 'Cooking'];

export default function InterestSelector({ selected, setSelected }) {
  const toggle = interest => {
    if (selected.includes(interest)) {
      setSelected(selected.filter(i => i !== interest));
    } else {
      setSelected([...selected, interest]);
    }
  };

  return (
    <View>
      <Text style={styles.label}>Select Interests:</Text>
      <View style={styles.options}>
        {INTERESTS.map(interest => (
          <TouchableOpacity
            key={interest}
            style={[styles.chip, selected.includes(interest) && styles.selected]}
            onPress={() => toggle(interest)}
          >
            <Text style={[styles.text, selected.includes(interest) && styles.selectedText]}>
              {interest}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontWeight: '600', marginBottom: 10 },
  options: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#6C5CE7',
  },
  selected: {
    backgroundColor: '#6C5CE7',
  },
  text: {
    color: '#6C5CE7',
  },
  selectedText: {
    color: '#fff',
  },
});
