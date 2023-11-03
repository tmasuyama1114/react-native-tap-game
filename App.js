
// // ランダムな色を返す関数
// export const getRandomColor = () => {
//   const colors = Object.keys(colorNames);
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// // ランダムな数字を返す関数
// export const getRandomNumber = () => Math.ceil(Math.random() * 9);

// // 色の名前と実際の値のマッピング
// export const colorNames = {
//   'rgba(255, 0, 0, 0.8)': 'red',
//   'rgba(0, 0, 255, 0.8)': 'blue',
//   'rgba(0, 128, 0, 0.8)': 'green',
// };

// // 正解のオプションを含むオプションの配列を返す関数
// export const generateOptions = (correctAnswer) => {
//   let options = new Array(9).fill(null).map(() => {
//     return {
//       color: getRandomColor(),
//       number: getRandomNumber(),
//     };
//   });

//   // Ensure that the correct answer is included in the options
//   const correctIndex = Math.floor(Math.random() * options.length);
//   options[correctIndex] = correctAnswer;

//   return options;
// };


import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { getRandomColor, getRandomNumber, colorNames, generateOptions } from './utils';

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
