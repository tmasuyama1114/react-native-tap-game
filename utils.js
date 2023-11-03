// ランダムな色を返す関数
export const getRandomColor = () => {
  const colors = Object.keys(colorNames);
  return colors[Math.floor(Math.random() * colors.length)];
};

// ランダムな数字を返す関数
export const getRandomNumber = () => Math.ceil(Math.random() * 9);

// 色の名前と実際の値のマッピング
export const colorNames = {
  'rgba(255, 0, 0, 0.8)': 'red',
  'rgba(0, 0, 255, 0.8)': 'blue',
  'rgba(0, 128, 0, 0.8)': 'green',
};

// 正解のオプションを含むオプションの配列を返す関数
export const generateOptions = (correctAnswer) => {
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
