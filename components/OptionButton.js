import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

// オプションボタンのコンポーネント
const OptionButton = ({ option, onPress }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: option.color }]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{option.number}</Text>
  </TouchableOpacity>
);

export default OptionButton;
