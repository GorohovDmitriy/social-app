import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Mutation($input: CreateUserInput) {
    createUser(input: $input) {
      id
      firstName
      lastName
      email
      password
      position
      isAuth
    }
  }
`;

export const GET_USERS = gql`
  query Users {
    users {
      id
      firstName
      lastName
      email
      password
      position
      image
      isAuth
    }
  }
`;

export const GET_USER = gql`
  query User($id: ID) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      password
      position
      image
      isAuth
    }
  }
`;
