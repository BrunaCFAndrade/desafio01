class CustomerRepositoryMongo {
	constructor(customerModel) {
		this.customer = customerModel;
	}

	async getAll() {
		return await this.customer.find();
	}
}

module.exports = CustomerRepositoryMongo;