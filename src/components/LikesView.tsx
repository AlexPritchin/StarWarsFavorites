import {
  TextStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props {
  likesNumber?: number;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
}

const LikesView: React.FC<Props> = ({ likesNumber, title, titleStyle }) => {
  return (
    <View style={styles.containerView}>
      <Text style={{ fontSize: 22, fontWeight: '500' }}>{likesNumber}</Text>
      <Text style={[{ fontSize: 14 }, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
  },
});

export default LikesView;
