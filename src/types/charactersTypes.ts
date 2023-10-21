export type CharacterItem = {
  id: string;
  name: string;
  gender: string;
};

export type CharacterListPage = {
  next: boolean;
  characters: CharacterItem[];
};
