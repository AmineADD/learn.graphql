/**
 *  Importattion 
 */
const { ApolloServer } = require('apollo-server');
var users = require('./Data/UsersData.js')
var posts = require('./Data/PostsData.js')
var typeDefs = require('./Schema/typeDef.js');

/**
 *  resolver 
 */

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
    userById : (root,data)=>{ 
      return users[users.findIndex(user=> user.id === data.id)]
    },
    postById :(root,data)=> {
      return posts[data.id]
    },
    commentsByPostId:(root,data)=>{ 
      return posts[data.id].posts
    }  
  },
  Mutation: {
    deleteUser: (root, vars) => {
      users = users.filter(user => user.id !== vars.id)
      return true
    },
    deletePost: (root, vars) => {
      posts = posts.filter(posts => posts.id !== vars.id)
      return true
    },
    createUser: (root, vars) => {
      return users.push(vars.input)
    },
    updateUser: (root, vars) => {

      users = users.map((user) => { user.id === vars.input.id ? (vars.input) : user })
      return true;

    },
    createPost: (root, vars) => {
      return posts.push(vars.input)
    },
    updatePost: (root, vars) => { 
      posts = posts.map((post) => { post.id === vars.input.id ? (vars.input) : post })
      return true;
    }

  }
};

/**
 *    Server start
 */


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

















