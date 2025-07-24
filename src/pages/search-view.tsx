import type React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { useState } from 'react';

const Search = (): React.JSX.Element => {
  const [state] = useState({
    searchText: '',
    pokemons: [],
  });
  return (
    <>
      <Header />
      <Main searchText={state.searchText} pokemons={state.pokemons} />
    </>
  );
};

export default Search;

// export class Search extends Component {
//   state = {
//     searchText: '',
//     pokemons: [],
//   };
//   render() {
//     return (
//       <>
//         <Header />
//         <Main
//           searchText={this.state.searchText}
//           pokemons={this.state.pokemons}
//         />
//       </>
//     );
//   }
// }
