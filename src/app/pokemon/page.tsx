import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import PokemonPageClient from "../components/pokemon-page-client/pokemon-page-client";
import { API_BASE_URL } from "../utils/constants/constants";

export default async function PokemonPage() {
  try {
    const response = await fetch(`${API_BASE_URL}pokemon/?limit=20`, {
      cache: 'force-cache',
    });
    if (!response.ok) {
      throw new Error(`Error while receiving data: ${response.status}`);
    }
    const { results: pokemonsList } = await response.json();
    return (
      <div className="min-h-screen bg-base-fon transition-colors dark:bg-white">
        <Header />
        <main className="grid">
          <PokemonPageClient initialPokemons={pokemonsList} />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}
