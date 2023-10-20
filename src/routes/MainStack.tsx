import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStackParamList } from './types';

import CharactersListScreen from '../screens/CharactersListScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CharactersList"
        component={CharactersListScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
