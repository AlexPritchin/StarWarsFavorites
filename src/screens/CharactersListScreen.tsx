import { useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useInfiniteQuery } from '@tanstack/react-query';

import {
  getCharactersList,
} from '../services/query';
import { getAllCharactersArrayFromPages } from '../helpers/charactersHelpers';
import FullScreenSpinnerCentered from '../components/FullScreenSpinnerCentered';
import ListTouchableItem from '../components/ListTouchableItem';

import { MainStackParamList } from '../routes/types';
import { CharacterItem } from '../types/charactersTypes';

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'CharactersList'>;

const CharactersListScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const currentPage = useRef(1);

  const {
    data: charactersPages,
    isLoading: listQueryLoading,
    isFetchingNextPage,
    isRefetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    [ 'charactersList' ],
    getCharactersList,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.next) {
          if (currentPage.current === pages.length) {
            ++currentPage.current;
          }
          return currentPage.current;
        }

        return undefined;
      },
      cacheTime: 0,
    }
  );

  useEffect(() => {
    if (isRefetching) {
      currentPage.current = 0;
    }
  }, [isRefetching]);

  const renderListItem = (item: CharacterItem) => {
    return (
      <ListTouchableItem
        characterItem={item}
        onPress={() => { navigation.navigate('CharacterDetails', { character: item }) }}/>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  const renderFooter = () => (
    <View style={styles.footerContainer}>
      {isFetchingNextPage && <ActivityIndicator />}
    </View>
  );

  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center' }}>
        <Image style={{ height: 70, width: 148 }} source={require('../resources/SWLogo.jpg')}/>
        <Text style={{ marginTop: 3, fontStyle: 'italic', fontWeight: '800', fontSize: 28 }}>Favorites</Text>
      </View>
      {listQueryLoading && !isFetchingNextPage ? (
        <FullScreenSpinnerCentered />
      ) : (
        <>
          <FlatList
            data={getAllCharactersArrayFromPages(charactersPages?.pages)}
            renderItem={({ item }) => renderListItem(item)}
            style={{
              backgroundColor: 'white',
            }}
            contentContainerStyle={styles.listContentContainer}
            ItemSeparatorComponent={() => renderSeparator()}
            ListFooterComponent={renderFooter}
            onEndReachedThreshold={0.1}
            onEndReached={() => {
              if (hasNextPage) {
                fetchNextPage();
              }
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginLeft: 10,
    backgroundColor: '#939393',
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 5,
  },
  listContentContainer: {
    paddingHorizontal: 25,
    paddingBottom: 40,
    backgroundColor: 'white',
  },
});

export default CharactersListScreen;
