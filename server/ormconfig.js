require("dotenv-safe").config();

module.exports = {
	type: "mongodb",
	url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@kryptcha.fpd0f.mongodb.net/test`,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	synchronize: true,
	logging: true,
	entities: ["./dist/entities/*.js"]
};
