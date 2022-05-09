import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  ticket?: Maybe<Ticket>;
  tickets: Array<Ticket>;
  tokenPurchase?: Maybe<TokenPurchase>;
  tokenPurchases: Array<TokenPurchase>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryTicketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTicketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ticket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ticket_Filter>;
};


export type QueryTokenPurchaseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenPurchasesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPurchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenPurchase_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  ticket?: Maybe<Ticket>;
  tickets: Array<Ticket>;
  tokenPurchase?: Maybe<TokenPurchase>;
  tokenPurchases: Array<TokenPurchase>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionTicketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTicketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ticket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ticket_Filter>;
};


export type SubscriptionTokenPurchaseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenPurchasesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPurchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenPurchase_Filter>;
};

export type Ticket = {
  __typename?: 'Ticket';
  id: Scalars['ID'];
  tokenPurchases: Array<TokenPurchase>;
};


export type TicketTokenPurchasesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPurchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenPurchase_Filter>;
};

export type Ticket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenPurchases?: InputMaybe<Array<Scalars['String']>>;
  tokenPurchases_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenPurchases_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenPurchases_not?: InputMaybe<Array<Scalars['String']>>;
  tokenPurchases_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenPurchases_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
};

export enum Ticket_OrderBy {
  Id = 'id',
  TokenPurchases = 'tokenPurchases'
}

export type TokenPurchase = {
  __typename?: 'TokenPurchase';
  amount: Scalars['BigInt'];
  id: Scalars['ID'];
  length: Scalars['BigInt'];
  owner: Scalars['ID'];
  soldAt?: Maybe<Scalars['BigInt']>;
  ticket: Scalars['ID'];
  timestamp: Scalars['BigInt'];
};

export type TokenPurchase_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  length?: InputMaybe<Scalars['BigInt']>;
  length_gt?: InputMaybe<Scalars['BigInt']>;
  length_gte?: InputMaybe<Scalars['BigInt']>;
  length_in?: InputMaybe<Array<Scalars['BigInt']>>;
  length_lt?: InputMaybe<Scalars['BigInt']>;
  length_lte?: InputMaybe<Scalars['BigInt']>;
  length_not?: InputMaybe<Scalars['BigInt']>;
  length_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['ID']>;
  owner_gt?: InputMaybe<Scalars['ID']>;
  owner_gte?: InputMaybe<Scalars['ID']>;
  owner_in?: InputMaybe<Array<Scalars['ID']>>;
  owner_lt?: InputMaybe<Scalars['ID']>;
  owner_lte?: InputMaybe<Scalars['ID']>;
  owner_not?: InputMaybe<Scalars['ID']>;
  owner_not_in?: InputMaybe<Array<Scalars['ID']>>;
  soldAt?: InputMaybe<Scalars['BigInt']>;
  soldAt_gt?: InputMaybe<Scalars['BigInt']>;
  soldAt_gte?: InputMaybe<Scalars['BigInt']>;
  soldAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soldAt_lt?: InputMaybe<Scalars['BigInt']>;
  soldAt_lte?: InputMaybe<Scalars['BigInt']>;
  soldAt_not?: InputMaybe<Scalars['BigInt']>;
  soldAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ticket?: InputMaybe<Scalars['ID']>;
  ticket_gt?: InputMaybe<Scalars['ID']>;
  ticket_gte?: InputMaybe<Scalars['ID']>;
  ticket_in?: InputMaybe<Array<Scalars['ID']>>;
  ticket_lt?: InputMaybe<Scalars['ID']>;
  ticket_lte?: InputMaybe<Scalars['ID']>;
  ticket_not?: InputMaybe<Scalars['ID']>;
  ticket_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TokenPurchase_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Length = 'length',
  Owner = 'owner',
  SoldAt = 'soldAt',
  Ticket = 'ticket',
  Timestamp = 'timestamp'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetTicketsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTicketsQuery = { __typename?: 'Query', tickets: Array<{ __typename?: 'Ticket', id: string, tokenPurchases: Array<{ __typename?: 'TokenPurchase', id: string, amount: string, timestamp: string, owner: string }> }> };


export const GetTicketsDocument = gql`
    query GetTickets {
  tickets {
    id
    tokenPurchases {
      id
      amount
      timestamp
      owner
    }
  }
}
    `;

export function useGetTicketsQuery(options?: Omit<Urql.UseQueryArgs<GetTicketsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTicketsQuery>({ query: GetTicketsDocument, ...options });
};