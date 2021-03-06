import React from "react";
import { Link } from "react-router-dom";

import { useQuery, useMutation } from "@apollo/client";
import { GET_POKEMONS } from "./graphql/queries";
import { SET_POKEMONS } from "./graphql/mutations";

import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 5 }
  });
  const [setPokemons] = useMutation(SET_POKEMONS);

  if (loading) return <div>Loading...</div>;
  if (error) return null;

  const onSetPokemonClick = () => {
    setPokemons({
      variables: {
        id: data.pokemons[0].id,
        newName: `Poke dude ${Math.random()}`
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onSetPokemonClick}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to={`/home`}>link to home</Link>
        <div>
          {data.pokemons.map((pokemon: any) => (
            <div key={pokemon.id}>
              {pokemon.name} -- {pokemon.isBulbasaur}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
