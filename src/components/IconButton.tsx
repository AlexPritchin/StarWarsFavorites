import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { toggleFavorite, selectIsFavorite } from '../services/store';

import { CharacterItem } from '../types/charactersTypes';
import { buttonsColors } from '../resources/data/colors';

interface Props extends TouchableOpacityProps {
  characterItem: CharacterItem;
}

const IconButton: React.FC<Props> = ({
  characterItem: { id, gender },
  style,
  ...rest
}) => {
  const isCharacterFavorite = useAppSelector((state) =>
    selectIsFavorite(state, id)
  );
  const iconName = isCharacterFavorite ? 'heart-fill' : 'heart';
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      style={[styles.containerView, style]}
      onPress={() =>
        dispatch(
          toggleFavorite({ characterId: id, characterGender: gender ?? '' })
        )
      }
      {...rest}>
      <Icon name={iconName} size={24} color={buttonsColors.iconRed} />
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
