export type CharacterItem = {
  id: string;
  name: string;
  gender?: string;
  height?: string;
  mass?: string;
  birthYear?: string;
  hairColor?: string;
  skinColor?: string;
  eyeColor?: string;
};

export type CharacterListPage = {
  next: boolean;
  characters: CharacterItem[];
};
