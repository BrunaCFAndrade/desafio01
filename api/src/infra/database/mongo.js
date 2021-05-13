const { RESOLVER, Lifetime } = require('awilix');
const mongoose = require('mongoose');

const database = () => {
	const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASS } = process.env;
	const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

	mongoose.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		user: DB_USER,
		pass: DB_PASS
	});

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'erro de conexao:'));
	db.once('open', () => {
		console.log('conectado ao MongoDB!');
	});

	return mongoose;
};

module.exports = database;
database[RESOLVER] = {
	name: 'database',
	lifetime: Lifetime.SINGLETON
};