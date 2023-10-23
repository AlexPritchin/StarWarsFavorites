import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}

const TextButton: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.containerView}>
        <Text style={{ fontSize: 16, color: '#FD5D5D' }}>{title}</Text>
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
    borderColor: '#FFCCCC',
    backgroundColor: 'white',
  },
});

export default TextButton;
