import { Component } from 'react';
import { Search } from './pages/SearchView';
import ButtonError from './components/ButtonError';

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

  render() {
    if (this.state.shouldThrowError) {
      throw new Error('This is a simulated error!');
    }

    return (
      <>
        <Search />
        <ButtonError onClick={this.handleErrorButtonClick} />
      </>
    );
  }
}

export default App;
