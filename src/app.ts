import { ApolloServer } from "apollo-server";
import myTypeDef from "./GraphQl/todoDef";
import db from "./config/databaseConfig";
import { url } from "inspector";
import myresolver from "./controller/Resolver/allResolver";

const server = new ApolloServer({
  typeDefs: myTypeDef,
  resolvers: myresolver,
});

db.sync({})
  .then(() => console.log(" database is connected successfully"))
  .catch(() => console.log("Can't connect to database"));
console.log("server =========00");

server.listen().then((url) => console.log(`Server is running ${url}`));
