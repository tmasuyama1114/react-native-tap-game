// 必要なReactの機能やコンポーネントをインポートする
import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';

// スタイルシートをインポートする
import styles from './styles';

// ユーティリティ関数をインポートする
import { getRandomColor, getRandomNumber, colorNames, generateOptions } from './utils';

// OptionButtonコンポーネントをインポートする
import OptionButton from './components/OptionButton';

// Appコンポーネント（このアプリのメインコンポーネント）
export default function App() {
  // 正解の状態とそれを更新する関数をuseStateフックで作成する
  const [correctAnswer, setCorrectAnswer] = useState({
    color: getRandomColor(),
    number: getRandomNumber(),
  });

  // オプションの状態とそれを更新する関数をuseStateフックで作成する
  const [options, setOptions] = useState(generateOptions(correctAnswer));

  // スコアの状態とそれを更新する関数をuseStateフックで作成する
  const [score, setScore] = useState(0);

  // 新しい正解を生成する
  const newCorrectAnswer = {
    color: getRandomColor(),
    number: getRandomNumber(),
  };

  // ボタンが押されたときの処理をする関数
  const handlePress = (color, number) => {
    // もし押されたボタンが正解なら
    if (color === correctAnswer.color && number === correctAnswer.number) {
      // スコアを1増やす
      setScore(prevScore => prevScore + 1);
      // 新しい正解を生成する
      const newCorrectAnswer = {
        color: getRandomColor(),
        number: getRandomNumber(),
      };
      setCorrectAnswer(newCorrectAnswer);
      // 新しいオプションを生成する
      setOptions(generateOptions(newCorrectAnswer));
    } else {
      // 正解でない場合はアラートを表示し、スコアを0に戻す
      Alert.alert("Wrong! Your score is " + score + ".\nTap OK to play again", null, [
        {
          text: 'OK',
          onPress: () => {
            setScore(0);
            const newCorrectAnswer = {
              color: getRandomColor(),
              number: getRandomNumber(),
            };
            setCorrectAnswer(newCorrectAnswer);
            setOptions(generateOptions(newCorrectAnswer));
          }
        },
      ]);
    }
  };

  // コンポーネントの見た目を定義する
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        {/* 指示文を表示する */}
        Tap the <Text style={styles.emphasize}>{colorNames[correctAnswer.color]}</Text> button with the number <Text style={styles.emphasize}>{correctAnswer.number}</Text>
      </Text>
      <View style={styles.grid}>
        {/* 生成された各オプションに対してOptionButtonコンポーネントを表示する */}
        {options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            onPress={() => handlePress(option.color, option.number)}
          />
        ))}
      </View>
      {/* 現在のスコアを表示する */}
      <Text style={styles.score}>Score: <Text style={styles.emphasize}>{score}</Text></Text>
    </View>
  );
}
