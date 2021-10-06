const { gql } = require('apollo-server');
module.exports = gql`
scalar Date

type date {
  date: Date
}
input DateInput {
  date: Date
}
type Query {
    users: [User]
    posts: [Post]
  }

type User {
  id: Int
  email: String
  password: String
  firstName: String
  lastName: String
}
input UserInput{
  id: Int
  email: String
  password: String
  firstName: String
  lastName: String
}
input PostInput{
  id: Int
    author: UserInput
    comments: PostInput
    content: String
    createdAt: DateInput
    updatedAt: DateInput
}
type Post {
    id: Int
    author: User
    comments: Post
    content: String
    createdAt: date
    updatedAt: date
} 

type Mutation {
  createUser(input : UserInput!): Boolean
  updateUser(input : UserInput!): Boolean
  deleteUser(id: Int!): Boolean
  deletePost(id: Int): Boolean 
  createPost(input : PostInput!): Boolean
  updatePost(input : PostInput!): Boolean
}

`;