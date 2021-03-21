import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { ProductResolver } from "./resolvers/ProductResolver";

(async () => {
	await createConnection();

	const schema = await buildSchema({
		resolvers: [ProductResolver]
	});

	const app = express();
	const server = new ApolloServer({ schema });

	server.applyMiddleware({ app });

	app.listen(process.env.PORT ?? 4000, () => {
		console.log(
			`Server started at http://localhost:${process.env.PORT}${server.graphqlPath} !`
		);
	});
})();
