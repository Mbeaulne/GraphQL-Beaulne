import { gql } from "@apollo/client";

import { GET_POKEMONS } from "./graphql/queries";
// import {
//   Query as QueryResolver,
//   Mutation as MutationResolver,
//   Pokemon as PokemonResolver
// } from "./generated/graphql";

export const resolvers = {
  Mutation: {
    setPokemons: (_: any, variables: any, { cache, getCacheKey }: any) => {
      const id = getCacheKey({ __typename: "Pokemon", id: variables.id });

      const fragment = gql`
        fragment pokemon on Pokemon {
          name
          isBulbasaur @client
        }
      `;

      const pokemon = cache.readFragment({
        id,
        fragment
      });

      cache.writeFragment({
        fragment,
        id,
        data: {
          ...pokemon,
          name: variables.newName,
          isBulbasaur: variables.newName === "Bulbasaur" ? "one" : "two"
        }
      });
    }
  },
  Query: {},
  Pokemon: {
    isBulbasaur: (parent: any) => {
      return parent.name! === "Bulbasaur" ? "one" : "two";
    }
  }
};
