import api from '../api/apiClient';
import { getCharactersListItems } from '../../helpers/charactersHelpers';

interface CharactersListParams {
  queryKey: [string];
  pageParam?: number;
}

const getCharactersList = async ({
  pageParam = 1,
}: CharactersListParams) => {
  return api
    .get('people', {
      params: {
        page: pageParam,
      },
    })
    .then((response) => {
      return {
        next: !!response.data.next,
        characters: getCharactersListItems(response.data.results),
      };
    });
};

export { getCharactersList };
