const { createController } = require('awilix-express');

const API = (customerApplication) => ({
	getAll: async (req, res) => {
		const customers = await customerApplication.getAll();
		res.send(customers);
	},
	getAllByStatus: async (req, res) => {
		const { status } = req.params;
		const customers = await customerApplication.getAllByStatus(status);
		res.send(customers);
	}
});

exports.default = createController(API)
	.prefix('/api/customer')
	.get('', 'getAll')
	.get('/:status', 'getAllByStatus');