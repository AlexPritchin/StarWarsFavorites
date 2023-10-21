import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from 'react-native';

import { CharacterItem } from '../types/charactersTypes';

interface Props extends TouchableOpacityProps {
  characterItem: CharacterItem;
}

const ListTouchableItem: React.FC<Props> = ({ characterItem, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.containerView}>
        <Text style={{ fontSize: 22, fontWeight: '500' }}>{characterItem.name}</Text>
        <Text style={{ fontSize: 18 }}>{characterItem.gender}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerView: {
    gap: 13,
    paddingTop: 11,
    paddingBottom: 15,
    backgroundColor: 'white',
  },
});

export default ListTouchableItem;
