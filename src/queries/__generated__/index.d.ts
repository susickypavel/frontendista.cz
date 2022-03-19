/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPostBySlug
// ====================================================

export interface GetPostBySlug_allPost {
  __typename: "Post";
  title: string | null;
}

export interface GetPostBySlug {
  allPost: GetPostBySlug_allPost[];
}

export interface GetPostBySlugVariables {
  slug?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPostSlug
// ====================================================

export interface GetAllPostSlug_allPost_slug {
  __typename: "Slug";
  current: string | null;
}

export interface GetAllPostSlug_allPost {
  __typename: "Post";
  slug: GetAllPostSlug_allPost_slug | null;
}

export interface GetAllPostSlug {
  allPost: GetAllPostSlug_allPost[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPost
// ====================================================

export interface GetAllPost_allPost_slug {
  __typename: "Slug";
  current: string | null;
}

export interface GetAllPost_allPost {
  __typename: "Post";
  title: string | null;
  publishedAt: any | null;
  slug: GetAllPost_allPost_slug | null;
}

export interface GetAllPost {
  allPost: GetAllPost_allPost[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
