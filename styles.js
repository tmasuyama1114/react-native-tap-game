import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  instructions: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  emphasize: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  grid: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '30%',
    height: '30%',
    aspectRatio: 1,
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
