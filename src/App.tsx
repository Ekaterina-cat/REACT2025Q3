import { Component, type ReactNode } from 'react';
import ButtonError from './components/ButtonError';
import Footer from './components/Footer';
import Search from './pages/search-view';

class App extends Component {
  state = {
    shouldThrowError: false,
  };

  handleErrorButtonClick = () => {
    this.setState({ shouldThrowError: true });
  };

  handleTryAgain = () => {
    this.setState({ shouldThrowError: false });
  };

  render(): ReactNode {
    if (this.state.shouldThrowError) {
      throw new Error('This is a simulated error!');
    }

    return (
      <>
        <Search />
        <ButtonError onClick={this.handleErrorButtonClick} />
        <Footer />
      </>
    );
  }
}

export default App;
