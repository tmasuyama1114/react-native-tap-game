import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [score, setScore] = useState(0);

  const handleTap = () => {
    setScore(score + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <TouchableOpacity onPress={handleTap} style={styles.button}>
        <Text style={styles.buttonText}>Tap me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 48,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});
