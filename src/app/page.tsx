import PokemonPage from './(pages)/pokemon/page';
import { Providers } from './providers';

export default async function Home() {
  return (
    <Providers>
      <PokemonPage />
    </Providers>
  );
}
