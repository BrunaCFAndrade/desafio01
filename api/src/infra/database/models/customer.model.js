const { RESOLVER } = require('awilix');
const { Schema } = require('mongoose');

const customerSchema = new Schema({
	name: String,
	status: {
		type: String,
		enum: ['Inadimplente', 'Adimplentes']
	}
});

const customerModel = ({ database: mongoose }) => mongoose.model('Customer', customerSchema);
module.exports = customerModel;

customerModel[RESOLVER] = {
	name: 'CustomerModel'
};