import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from 'react-native';

import IconButton from '../IconButton';

import { CharacterItem } from '../../types/charactersTypes';

interface Props extends TouchableOpacityProps {
  characterItem: CharacterItem;
}

const ListTouchableItem: React.FC<Props> = ({ characterItem, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.containerView}>
        <View style={styles.textContainerView}>
          <Text style={styles.characterNameText}>{characterItem.name}</Text>
          <Text style={{ fontSize: 18 }}>{characterItem.gender}</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <IconButton characterItem={characterItem} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 17,
    backgroundColor: 'white',
  },
  textContainerView: {
    gap: 13,
    paddingTop: 11,
    paddingBottom: 15,
  },
  characterNameText: {
    fontSize: 22,
    fontWeight: '500',
  },
});

export default ListTouchableItem;
