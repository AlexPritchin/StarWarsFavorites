import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

interface Props extends TouchableOpacityProps {
  title?: string;
}

const IconButton: React.FC<Props> = ({ title, style, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.containerView, style]} {...rest}>
      <Icon name='heart' size={24} color='#FF2A24'/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
  },
});

export default IconButton;
