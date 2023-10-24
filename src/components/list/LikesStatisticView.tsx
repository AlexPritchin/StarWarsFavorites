import { StyleSheet, Text, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { reset, selectStatisticsMemoized } from '../../services/store';

import LikesView from './LikesView';
import TextButton from './TextButton';

import { mainColors } from '../../resources/data/colors';

const LikesStatisticView: React.FC = () => {
  const likesStatistics = useAppSelector(selectStatisticsMemoized);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.containerView}>
      <Text style={styles.titleText}>You like</Text>
      <View style={styles.likesContainer}>
        <LikesView
          likesNumber={likesStatistics.male}
          title="males"
          titleStyle={{ color: mainColors.textBlue }}
        />
        <LikesView
          likesNumber={likesStatistics.female}
          title="females"
          titleStyle={{ color: mainColors.textPink }}
        />
        <LikesView
          likesNumber={likesStatistics.other}
          title="others"
          titleStyle={{ color: mainColors.textYellow }}
        />
        <LikesView
          likesNumber={likesStatistics.total}
          title="total"
          titleStyle={{ color: mainColors.textGreen }}
        />
      </View>
      <TextButton
        style={{ marginTop: 27 }}
        title="Reset likes"
        onPress={() => dispatch(reset())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    marginTop: 23,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: mainColors.backgroundLightBlue,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '500',
  },
  likesContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    marginTop: 12,
  },
});

export default LikesStatisticView;
