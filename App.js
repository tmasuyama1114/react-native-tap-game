import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import styles from './styles';
import { getRandomColor, getRandomNumber, colorNames, generateOptions } from './utils';
import OptionButton from './components/OptionButton';

export default function App() {
  const [correctAnswer, setCorrectAnswer] = useState({
    color: getRandomColor(),
    number: getRandomNumber(),
  });
  const [options, setOptions] = useState(generateOptions(correctAnswer));
  const [score, setScore] = useState(0);

  const handlePress = (color, number) => {
    if (color === correctAnswer.color && number === correctAnswer.number) {
      setScore(prevScore => prevScore + 1);
      setCorrectAnswer({
        color: getRandomColor(),
        number: getRandomNumber(),
      });
      setOptions(generateOptions(correctAnswer));
    } else {
      Alert.alert("Wrong!", "Try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        Tap the <Text style={styles.emphasize}>{colorNames[correctAnswer.color]}</Text> button with the number <Text style={styles.emphasize}>{correctAnswer.number}</Text>
      </Text>
      <View style={styles.grid}>
        {options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            onPress={() => handlePress(option.color, option.number)}
          />
        ))}
      </View>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
}
