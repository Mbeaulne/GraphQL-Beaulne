import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Attack = {
   __typename?: 'Attack',
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  damage?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  setPokemons?: Maybe<Scalars['String']>,
};


export type MutationSetPokemonsArgs = {
  id?: Maybe<Scalars['Int']>,
  newName: Scalars['String']
};

export type Pokemon = {
   __typename?: 'Pokemon',
  attacks?: Maybe<PokemonAttack>,
  classification?: Maybe<Scalars['String']>,
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>,
  evolutions?: Maybe<Array<Maybe<Pokemon>>>,
  fleeRate?: Maybe<Scalars['Float']>,
  height?: Maybe<PokemonDimension>,
  id: Scalars['ID'],
  image?: Maybe<Scalars['String']>,
  isBulbasaur: Scalars['String'],
  maxCP?: Maybe<Scalars['Int']>,
  maxHP?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  resistant?: Maybe<Array<Maybe<Scalars['String']>>>,
  types?: Maybe<Array<Maybe<Scalars['String']>>>,
  weaknesses?: Maybe<Array<Maybe<Scalars['String']>>>,
  weight?: Maybe<PokemonDimension>,
};

export type PokemonAttack = {
   __typename?: 'PokemonAttack',
  fast?: Maybe<Array<Maybe<Attack>>>,
  special?: Maybe<Array<Maybe<Attack>>>,
};

export type PokemonDimension = {
   __typename?: 'PokemonDimension',
  minimum?: Maybe<Scalars['String']>,
  maximum?: Maybe<Scalars['String']>,
};

export type PokemonEvolutionRequirement = {
   __typename?: 'PokemonEvolutionRequirement',
  amount?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Pokemons = {
   __typename?: 'Pokemons',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  isBulbasaur?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  cachePokemons?: Maybe<Array<Maybe<Pokemons>>>,
  pokemon?: Maybe<Pokemon>,
  pokemons?: Maybe<Array<Maybe<Pokemon>>>,
  query?: Maybe<Query>,
};


export type QueryPokemonArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};


export type QueryPokemonsArgs = {
  first: Scalars['Int']
};

export type SetPokemonsMutationVariables = {
  id: Scalars['Int'],
  newName: Scalars['String']
};


export type SetPokemonsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setPokemons'>
);

export type PokemonsQueryVariables = {
  first: Scalars['Int']
};


export type PokemonsQuery = (
  { __typename?: 'Query' }
  & { pokemons: Maybe<Array<Maybe<(
    { __typename?: 'Pokemon' }
    & Pick<Pokemon, 'id' | 'name' | 'isBulbasaur'>
  )>>> }
);


export const SetPokemonsDocument = gql`
    mutation SetPokemons($id: Int!, $newName: String!) {
  setPokemons(id: $id, newName: $newName) @client
}
    `;
export type SetPokemonsMutationFn = ApolloReactCommon.MutationFunction<SetPokemonsMutation, SetPokemonsMutationVariables>;
export type SetPokemonsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetPokemonsMutation, SetPokemonsMutationVariables>, 'mutation'>;

    export const SetPokemonsComponent = (props: SetPokemonsComponentProps) => (
      <ApolloReactComponents.Mutation<SetPokemonsMutation, SetPokemonsMutationVariables> mutation={SetPokemonsDocument} {...props} />
    );
    
export type SetPokemonsProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SetPokemonsMutation, SetPokemonsMutationVariables> & TChildProps;
export function withSetPokemons<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SetPokemonsMutation,
  SetPokemonsMutationVariables,
  SetPokemonsProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SetPokemonsMutation, SetPokemonsMutationVariables, SetPokemonsProps<TChildProps>>(SetPokemonsDocument, {
      alias: 'setPokemons',
      ...operationOptions
    });
};

/**
 * __useSetPokemonsMutation__
 *
 * To run a mutation, you first call `useSetPokemonsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetPokemonsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setPokemonsMutation, { data, loading, error }] = useSetPokemonsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      newName: // value for 'newName'
 *   },
 * });
 */
export function useSetPokemonsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetPokemonsMutation, SetPokemonsMutationVariables>) {
        return ApolloReactHooks.useMutation<SetPokemonsMutation, SetPokemonsMutationVariables>(SetPokemonsDocument, baseOptions);
      }
export type SetPokemonsMutationHookResult = ReturnType<typeof useSetPokemonsMutation>;
export type SetPokemonsMutationResult = ApolloReactCommon.MutationResult<SetPokemonsMutation>;
export type SetPokemonsMutationOptions = ApolloReactCommon.BaseMutationOptions<SetPokemonsMutation, SetPokemonsMutationVariables>;
export const PokemonsDocument = gql`
    query Pokemons($first: Int!) {
  pokemons(first: $first) {
    id
    name
    isBulbasaur @client(always: true)
  }
}
    `;
export type PokemonsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PokemonsQuery, PokemonsQueryVariables>, 'query'> & ({ variables: PokemonsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PokemonsComponent = (props: PokemonsComponentProps) => (
      <ApolloReactComponents.Query<PokemonsQuery, PokemonsQueryVariables> query={PokemonsDocument} {...props} />
    );
    
export type PokemonsProps<TChildProps = {}> = ApolloReactHoc.DataProps<PokemonsQuery, PokemonsQueryVariables> & TChildProps;
export function withPokemons<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PokemonsQuery,
  PokemonsQueryVariables,
  PokemonsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PokemonsQuery, PokemonsQueryVariables, PokemonsProps<TChildProps>>(PokemonsDocument, {
      alias: 'pokemons',
      ...operationOptions
    });
};

/**
 * __usePokemonsQuery__
 *
 * To run a query within a React component, call `usePokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePokemonsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PokemonsQuery, PokemonsQueryVariables>) {
        return ApolloReactHooks.useQuery<PokemonsQuery, PokemonsQueryVariables>(PokemonsDocument, baseOptions);
      }
export function usePokemonsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PokemonsQuery, PokemonsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PokemonsQuery, PokemonsQueryVariables>(PokemonsDocument, baseOptions);
        }
export type PokemonsQueryHookResult = ReturnType<typeof usePokemonsQuery>;
export type PokemonsLazyQueryHookResult = ReturnType<typeof usePokemonsLazyQuery>;
export type PokemonsQueryResult = ApolloReactCommon.QueryResult<PokemonsQuery, PokemonsQueryVariables>;