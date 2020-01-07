import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      isBulbasaur @client
    }
  }
`;
