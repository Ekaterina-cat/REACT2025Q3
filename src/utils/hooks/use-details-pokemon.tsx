import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const usePokemonDetail = (): {
  pokemonId: string | null;
  handleClose: () => void;
} => {
  const { id } = useParams<{ id: string }>();
  const [pokemonId, setPokemonId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setPokemonId(id);
    }
  }, [id]);

  const handleClose = (): void => {
    navigate('/page=1');
  };

  return {
    pokemonId,
    handleClose,
  };
};

export default usePokemonDetail;
