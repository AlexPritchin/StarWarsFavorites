import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import DetailsItem from '../components/DetailsItem';

import { MainStackParamList } from '../routes/types';

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'CharacterDetails'>;

const CharacterDetailsScreen: React.FC<ScreenProps> = ({ route }) => {
  const character = route.params.character;

  return (
    <View style={styles.mainContainer}>
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
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
});

export default CharacterDetailsScreen;
