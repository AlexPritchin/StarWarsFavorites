import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LikesView from './LikesView';
import TextButton from './TextButton';

interface Props {
  title?: string;
  value?: string;
}

const LikesStatisticView: React.FC<Props> = ({ title, value }) => {
  return (
    <View style={styles.containerView}>
      <Text style={{ fontSize: 24, fontWeight: '500' }}>You like</Text>
      <View style={{ flexDirection: 'row', width: '100%', height: 45, marginTop: 12 }}>
        <LikesView title='males' titleStyle={{ color: '#0047FF' }} />
        <LikesView title='females' titleStyle={{ color: '#F94A4D' }} />
        <LikesView title='others' titleStyle={{ color: '#B28100' }} />
        <LikesView title='total' titleStyle={{ color: '#1BBE00' }} />
      </View>
      <TextButton title='Reset likes' style={{ marginTop: 27 }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    marginTop: 23,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#ECF7FF',
  },
});

export default LikesStatisticView;
