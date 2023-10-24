import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from 'react-native';

import { buttonsColors } from '../../resources/data/colors';

interface Props extends TouchableOpacityProps {
  title: string;
}

const TextButton: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.containerView}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 160,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: buttonsColors.borderRed,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 16,
    color: buttonsColors.textRed,
  },
});

export default TextButton;
