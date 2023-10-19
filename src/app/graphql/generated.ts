import { Injectable } from '@angular/core';
import {gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateProductInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type FetchAndSaveProductsResponse = {
  __typename?: 'FetchAndSaveProductsResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  createUser: User;
  deleteProduct: Scalars['Boolean']['output'];
  fetchAndSaveProducts: FetchAndSaveProductsResponse;
  login: LoginResponse;
  register: User;
  signup: User;
  updateProduct: Product;
};


export type MutationCreateProductArgs = {
  productsInput: CreateProductInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRegisterArgs = {
  input: CreateUserInput;
};


export type MutationSignupArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['Int']['input'];
  updateProductInput: UpdateProductInput;
};

export type Product = {
  __typename?: 'Product';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  user: User;
  username: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  product: Product;
  products: Array<Product>;
  productsByUser: Array<Product>;
  user: User;
  users: Array<User>;
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductsByUserArgs = {
  name: Scalars['String']['input'];
};


export type QueryUserArgs = {
  name: Scalars['String']['input'];
};

export type UpdateProductInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  Products: Array<Product>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type ProductInfoFragment = { 
  __typename?: 'Product';
    category: String;
    description: String;
    id: number;
    image: String;
    name: String;
    price: number;
    user: User;
    username: String;};


//============================================================================

export const ProductInfoFragmentDoc = gql`
  fragment ProductInfo on Product {
    id
    name
    category
    price
    description
    image
    username
    user
  }
    `
;

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;

export type GetAllProductsQuery = { 
  __typename?: 'Query', 
  products: Array<{ 
    __typename?: 'Product';
    category: String;
    description: String;
    id: number;
    image: String;
    name: String;
    price: number;
    user: User;
    username: String;
  }> 
};

export const GetAllProductsDocument = gql`
  query products {
    products {
      ...productInfo
    }
  }
  ${ProductInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })


//                                     Apollo.Query<GetAllMoviesQuery, GetAllMoviesQueryVariables>
export class GetAllProductsGQL extends Apollo.Query<GetAllProductsQuery> {
  override document = GetAllProductsDocument;
  
  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}