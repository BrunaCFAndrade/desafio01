class CustomerApplication {
	constructor(customerRepository) {
		this.customerRepository = customerRepository;
	}

	async getAll() {
		return await this.customerRepository.findAll();
	}

	async getAllByStatus(status) {
		return await this.customerRepository.findAllByStatus(status);
	}
}

module.exports = CustomerApplication;