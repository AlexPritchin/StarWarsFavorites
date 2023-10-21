import { CharacterItem, CharacterListPage } from '../types/charactersTypes';

const getCharactersListItems = (data: any): CharacterItem[] => {
  return (data as Array<any>).map<CharacterItem>((dataItem) => {
    return {
      id: dataItem?.url?.split('/', 6).pop(),
      name: dataItem?.name,
      gender: dataItem?.gender,
    };
  });
};

const getAllCharactersArrayFromPages = (charactersPages?: CharacterListPage[]) => {
  return charactersPages?.flatMap((page) => page.characters);
};

export {
  getCharactersListItems,
  getAllCharactersArrayFromPages,
};
