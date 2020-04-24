import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Article = {
   __typename?: 'Article';
  id: Scalars['Int'];
  title: Scalars['String'];
  body: Scalars['String'];
  authorID: Scalars['Int'];
  author: Author;
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
};

export type Author = {
   __typename?: 'Author';
  id: Scalars['Int'];
  name: Scalars['String'];
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
};

export type FetchArticle = {
  id: Scalars['Int'];
};

export type FetchAuthor = {
  id: Scalars['Int'];
};

export type Query = {
   __typename?: 'Query';
  articles: Array<Article>;
  article: Article;
  authors: Array<Author>;
  author: Author;
};


export type QueryArticleArgs = {
  id: Scalars['Int'];
};


export type QueryAuthorArgs = {
  id: Scalars['Int'];
};

export type NewArticle = {
  title: Scalars['String'];
  body: Scalars['String'];
  authorID: Scalars['Int'];
};

export type NewAuthor = {
  name: Scalars['String'];
};

export type EditArticle = {
  id: Scalars['Int'];
  title: Scalars['String'];
  body: Scalars['String'];
};

export type EditAuthor = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createArticle: Article;
  updateArticle: Article;
  deleteArticle: Article;
  createAuthor: Author;
  updateAuthor: Author;
  deleteAuthor: Author;
};


export type MutationCreateArticleArgs = {
  input: NewArticle;
};


export type MutationUpdateArticleArgs = {
  input: EditArticle;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Int'];
};


export type MutationCreateAuthorArgs = {
  input: NewAuthor;
};


export type MutationUpdateAuthorArgs = {
  input: EditAuthor;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['Int'];
};



