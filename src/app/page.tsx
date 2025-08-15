import { Footer, Header } from './components';

export default function Home() {
  return (
    <div className="min-h-screen bg-base-fon transition-colors dark:bg-white">
      <Header />
      <main className="grid"></main>
      <Footer />
    </div>
  );
}
