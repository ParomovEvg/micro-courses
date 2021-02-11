/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsersQuery
// ====================================================

export interface GetUsersQuery_users {
  __typename: "UserObjectType";
  /**
   * user uniq id
   */
  id: number;
  email: string;
  name: string;
}

export interface GetUsersQuery {
  users: GetUsersQuery_users[];
}
