import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../routes/types';

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'CharactersList'>;

const CharactersListScreen: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>List screen</Text>
    </View>
  )
};

export default CharactersListScreen;
