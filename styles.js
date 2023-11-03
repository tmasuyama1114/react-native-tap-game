import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    color: '#333', // 通常のテキストカラー
  },
  emphasize: {
    fontWeight: 'bold',
    fontSize: 26, // 強調するテキストのサイズを少し大きくします
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
