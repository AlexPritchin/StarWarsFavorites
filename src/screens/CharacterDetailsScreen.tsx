import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import DetailsItem from '../components/DetailsItem';
import IconButton from '../components/IconButton';

import { MainStackParamList } from '../routes/types';

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'CharacterDetails'>;

const CharacterDetailsScreen: React.FC<ScreenProps> = ({ route }) => {
  const character = route.params.character;

  return (
    <View style={styles.mainContainer}>
      <View>
        <DetailsItem
          title='Gender'
          value={character.gender}/>
        <DetailsItem
          title='Height'
          value={character.height}/>
        <DetailsItem
          title='Mass'
          value={character.mass}/>
        <DetailsItem
          title='Birth Year'
          value={character.birthYear}/>
        <DetailsItem
          title='Hair Color'
          value={character.hairColor}/>
        <DetailsItem
          title='Skin Color'
          value={character.skinColor}/>
        <DetailsItem
          title='Eye Color'
          value={character.eyeColor}/>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 19 }}>
        <IconButton characterItem={route.params?.character} style={{ height: 40, width: 90, marginRight: 18, borderRadius: 8, backgroundColor: '#ECF7FF' }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 25,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
});

export default CharacterDetailsScreen;
