const { ApolloServer, gql } = require('apollo-server');


var typeDefs = gql`
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


var users = [
  {
    id: 1,
    email: "string@email.com",
    password: "password",
    firstName: "firstname",
    lastName: "lastname",
  },
  {
    id: 2,
    email: "string2@email.com",
    password: "password2",
    firstName: "firstname2",
    lastName: "lastname2",
  },
];
var posts = [];

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
  },
  Mutation: {
    deleteUser: (root, vars) => {
      users = users.filter( user => user.id !== vars.id)  
      return true
    },
    deletePost: (root, vars) => {
      posts = users.filter( posts => posts.id !== vars.id)  
      return true
    },
    createUser:(root, vars)=>{ 
      return users.push(vars.input)
    },
    updateUser:(root, vars)=>{ 
     try{
      users =  users.map((user)=>{
        if(user.id===vars.input.id){
            return vars.input
        }else{
          return user;
        }
      })
      return true;
     }catch(err){
       return false;
     }
    },
    createPost:(root, vars)=>{
      return posts.push(vars.input)
    },
    updatePost:(root, vars)=>{
      try{
        posts =  posts.map((user)=>{
          if(posts.id===vars.input.id){
              return vars.input
          }else{
            return posts;
          }
        })
        return true;
       }catch(err){
         return false;
       }
    }
    
  }
};




const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
















 
