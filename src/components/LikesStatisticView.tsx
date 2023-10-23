import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { reset, selectStatisticsMemoized } from '../services/store';

import LikesView from './LikesView';
import TextButton from './TextButton';

interface Props {
  title?: string;
  value?: string;
}

const LikesStatisticView: React.FC<Props> = ({ title, value }) => {
  const likesStatistics = useAppSelector(selectStatisticsMemoized);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.containerView}>
      <Text style={{ fontSize: 24, fontWeight: '500' }}>You like</Text>
      <View style={{ flexDirection: 'row', width: '100%', height: 45, marginTop: 12 }}>
        <LikesView likesNumber={likesStatistics.male} title='males' titleStyle={{ color: '#0047FF' }} />
        <LikesView likesNumber={likesStatistics.female} title='females' titleStyle={{ color: '#F94A4D' }} />
        <LikesView likesNumber={likesStatistics.other} title='others' titleStyle={{ color: '#B28100' }} />
        <LikesView likesNumber={likesStatistics.total} title='total' titleStyle={{ color: '#1BBE00' }} />
      </View>
      <TextButton title='Reset likes' style={{ marginTop: 27 }} onPress={() => dispatch(reset())}/>
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
