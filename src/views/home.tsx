import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_POKEMONS } from "../graphql/queries";

import logo from "../logo.svg";
import "../App.css";

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 5 }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return null;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to={`/`}>to slash /</Link>
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

export default Home;
