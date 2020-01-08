import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  setPokemons?: Maybe<Scalars['Int']>,
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
  query?: Maybe<Query>,
  pokemons?: Maybe<Array<Maybe<Pokemon>>>,
  pokemon?: Maybe<Pokemon>,
};


export type QueryPokemonsArgs = {
  first: Scalars['Int']
};


export type QueryPokemonArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Pokemon: ResolverTypeWrapper<Pokemon>,
  PokemonAttack: ResolverTypeWrapper<PokemonAttack>,
  Attack: ResolverTypeWrapper<Attack>,
  String: ResolverTypeWrapper<Scalars['String']>,
  PokemonEvolutionRequirement: ResolverTypeWrapper<PokemonEvolutionRequirement>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  PokemonDimension: ResolverTypeWrapper<PokemonDimension>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Mutation: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Pokemons: ResolverTypeWrapper<Pokemons>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Int: Scalars['Int'],
  Pokemon: Pokemon,
  PokemonAttack: PokemonAttack,
  Attack: Attack,
  String: Scalars['String'],
  PokemonEvolutionRequirement: PokemonEvolutionRequirement,
  Float: Scalars['Float'],
  PokemonDimension: PokemonDimension,
  ID: Scalars['ID'],
  Mutation: {},
  Boolean: Scalars['Boolean'],
  Pokemons: Pokemons,
};

export type AttackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attack'] = ResolversParentTypes['Attack']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  damage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  setPokemons?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationSetPokemonsArgs, 'newName'>>,
};

export type PokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = {
  attacks?: Resolver<Maybe<ResolversTypes['PokemonAttack']>, ParentType, ContextType>,
  classification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  evolutionRequirements?: Resolver<Maybe<ResolversTypes['PokemonEvolutionRequirement']>, ParentType, ContextType>,
  evolutions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pokemon']>>>, ParentType, ContextType>,
  fleeRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  height?: Resolver<Maybe<ResolversTypes['PokemonDimension']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isBulbasaur?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  maxCP?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  maxHP?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resistant?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  types?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  weaknesses?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  weight?: Resolver<Maybe<ResolversTypes['PokemonDimension']>, ParentType, ContextType>,
};

export type PokemonAttackResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonAttack'] = ResolversParentTypes['PokemonAttack']> = {
  fast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attack']>>>, ParentType, ContextType>,
  special?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attack']>>>, ParentType, ContextType>,
};

export type PokemonDimensionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonDimension'] = ResolversParentTypes['PokemonDimension']> = {
  minimum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  maximum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type PokemonEvolutionRequirementResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonEvolutionRequirement'] = ResolversParentTypes['PokemonEvolutionRequirement']> = {
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type PokemonsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokemons'] = ResolversParentTypes['Pokemons']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isBulbasaur?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  pokemons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pokemon']>>>, ParentType, ContextType, RequireFields<QueryPokemonsArgs, 'first'>>,
  pokemon?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, QueryPokemonArgs>,
};

export type Resolvers<ContextType = any> = {
  Attack?: AttackResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Pokemon?: PokemonResolvers<ContextType>,
  PokemonAttack?: PokemonAttackResolvers<ContextType>,
  PokemonDimension?: PokemonDimensionResolvers<ContextType>,
  PokemonEvolutionRequirement?: PokemonEvolutionRequirementResolvers<ContextType>,
  Pokemons?: PokemonsResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
