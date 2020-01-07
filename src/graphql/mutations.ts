import { gql } from "@apollo/client";

export const SET_POKEMONS = gql`
  mutation SetPokemons($id: Int!, $newName: String!) {
    setPokemons(id: $id, newName: $newName) @client
  }
`;
