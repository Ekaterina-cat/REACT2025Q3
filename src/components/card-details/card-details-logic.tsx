import { useState, useEffect } from 'react';
import type {
  CardDetailsProps,
  PokemonDetails,
} from './types/card-details.type';

const CardDetailsLogic = ({ url }: CardDetailsProps) => {
  const [details, setDetails] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error('Error fetching details: ', error);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  return { details };
};

export default CardDetailsLogic;
