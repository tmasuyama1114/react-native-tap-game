import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const colorNames = {
  'rgba(255, 0, 0, 0.8)': 'red',
  'rgba(0, 0, 255, 0.8)': 'blue',
  'rgba(0, 128, 0, 0.8)': 'green',
};

const getRandomColor = () => {
  const colors = Object.keys(colorNames);
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomNumber = () => Math.ceil(Math.random() * 9);

const generateOptions = (correctAnswer) => {
  let options = new Array(9).fill(null).map(() => {
    return {
      color: getRandomColor(),
      number: getRandomNumber(),
    };
  });

  // Ensure that the correct answer is included in the options
  const correctIndex = Math.floor(Math.random() * options.length);
  options[correctIndex] = correctAnswer;

  return options;
};

export default function App() {
  const [correctAnswer, setCorrectAnswer] = useState({
    color: getRandomColor(),
    number: getRandomNumber(),
  });
  const [options, setOptions] = useState(generateOptions(correctAnswer));
  const [score, setScore] = useState(0);

  useEffect(() => {
    setOptions(generateOptions(correctAnswer));
  }, [correctAnswer]);

  const handlePress = (color, number) => {
    if (color === correctAnswer.color && number === correctAnswer.number) {
      setScore(score + 1);
      setCorrectAnswer({
        color: getRandomColor(),
        number: getRandomNumber(),
      });
      // Alert.alert("Correct!", `Score: ${score + 1}`);
    } else {
      Alert.alert("Wrong!", "Try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        Tap the {colorNames[correctAnswer.color]} button with the number {correctAnswer.number}!
      </Text>
      <View style={styles.grid}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { backgroundColor: option.color }]}
            onPress={() => handlePress(option.color, option.number)}
          >
            <Text style={styles.buttonText}>{option.number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  instructions: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '30%', // Adjust the size of the button according to your design
    height: '30%', // Change this to adjust the size of the button
    aspectRatio: 1, // Keep the aspect ratio to 1 to make buttons square
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    opacity: 0.9,
  },
  buttonText: {
    color: '#fff',
    fontSize: 42,
    fontWeight: 'bold',
  },
  score: {
    marginTop: 20,
    fontSize: 24,
  },
});
