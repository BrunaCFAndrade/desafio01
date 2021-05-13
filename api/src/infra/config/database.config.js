const { asClass } = require('awilix');

const localDb = container => {
	console.log('LocalDB selecionado');
	const CustomerRepository = require('../repositories/customer.repository.local');

	container.register({
		customerRepository: asClass(CustomerRepository).singleton(),
	});
};

const mongoDB = container => {
	console.log('MongoDB selecionado');
	const CustomerRepositoryMongo = require('../repositories/customer.repository.mongo');

	container.loadModules([
		'infra/database/**/*.js'
	]);

	container.register({
		customerRepository: asClass(CustomerRepositoryMongo)
	});
};

const resolveDB = container => {
	if (process.env.DRIVER === 'INMEMORY') localDb(container);
	else mongoDB(container);
};

module.exports = resolveDB;