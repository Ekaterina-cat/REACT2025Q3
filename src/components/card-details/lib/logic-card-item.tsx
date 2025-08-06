import { fetchDataDetailsPokemon } from '@utils/api';
import { useEffect, useState } from 'react';

import type { CardDetailsProps, PokemonDetails } from '..';

const CardDetailsLogic = ({ url }: CardDetailsProps) => {
  const [details, setDetails] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const data = await fetchDataDetailsPokemon<PokemonDetails>(url);
      setDetails(data);
    };

    fetchPokemonDetails();
  }, [url]);

  return { details };
};

export default CardDetailsLogic;
