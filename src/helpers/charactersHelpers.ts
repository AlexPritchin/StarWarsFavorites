import { CharacterItem, CharacterListPage } from '../types/charactersTypes';

const getCharactersListItems = (data: any): CharacterItem[] => {
  return (data as Array<any>).map<CharacterItem>((dataItem) => {
    return {
      id: dataItem?.url?.split('/', 6).pop(),
      name: dataItem?.name,
      gender: dataItem?.gender,
      height: dataItem?.height,
      mass: dataItem?.mass,
      birthYear: dataItem?.birth_year,
      hairColor: dataItem?.hair_color,
      skinColor: dataItem?.skin_color,
      eyeColor: dataItem?.eye_color,
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
