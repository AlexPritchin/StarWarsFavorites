import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStackParamList } from './types';

import IconButton from '../components/IconButton';
import CharactersListScreen from '../screens/CharactersListScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CharactersList"
        component={CharactersListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetailsScreen}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#ECF7FF',
          },
          headerTitle: route.params?.character.name,
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
          },
          headerRight: () => (
            <IconButton characterItem={route.params?.character} style={{ marginRight: -8 }}/>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
