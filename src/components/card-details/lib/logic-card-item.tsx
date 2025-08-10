import { useGetPokemonDetailsQuery } from '@utils/api/pokemon-api';

import type { CardDetailsProps } from '..';

const CardDetailsLogic = ({ url }: CardDetailsProps) => {
  const { data: details, error, isLoading } = useGetPokemonDetailsQuery(url);

  if (isLoading) {
    return { details: null, isLoading: true, error: null };
  }

  if (error) {
    return { details: null, isLoading: false, error };
  }

  return { details, isLoading: false, error: null };
};

export default CardDetailsLogic;
