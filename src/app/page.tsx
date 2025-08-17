import { Footer, Header } from './components';
import PokemonList from './components/pokemon-list/pokemon-list';
import { Providers } from './providers';

export default async function Home() {
  return (
    <Providers>
      <div className="min-h-screen bg-base-fon transition-colors dark:bg-white">
        <Header />
        <main className="grid">
          <PokemonList />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
