import { gql } from "@apollo/client";

export const getUsersQuery = gql`
  query GetUsersQuery {
    users {
      id
      email
      name
    }
  }
`;
