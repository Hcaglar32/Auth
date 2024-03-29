const { ApolloServer } = require('apollo-server');
const mongoose         = require('mongoose')

const typeDefs         = require('./graphql/typeDefs');
const resolvers        = require('./graphql/resolvers');

const MONGODB = "mongodb+srv://hasan495012:123Hasan.@cags.cwrcpp7.mongodb.net/?retryWrites=true&w=majority&appName=cags";

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB)
    .then(() => {
        console.log("mongodb connected");
        return server.listen({port:5000});
    })
    .then((res)=>{
        console.log(`Server runing at :${res.url}`);
    })
