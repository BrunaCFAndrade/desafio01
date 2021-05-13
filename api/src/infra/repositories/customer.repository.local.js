class CustomerRepository {
	
	constructor() {
		this.customers = [
			{ id: 1, name: 'Pedro', status: 'Adimplentes' },
			{ id: 2, name: 'João', status: 'Adimplentes' },
			{ id: 3, name: 'Maria', status: 'Adimplentes' },
			{ id: 4, name: 'José', status: 'Adimplentes' },
			{ id: 5, name: 'Judas', status: 'Adimplentes' },
			{ id: 10, name: 'Paulo', status: 'Inadimplentes' },
			{ id: 11, name: 'Maurício', status: 'Inadimplentes' },
			{ id: 12, name: 'Tiago', status: 'Inadimplentes' },
			{ id: 13, name: 'Tadeu', status: 'Inadimplentes' },
			{ id: 14, name: 'Mateus', status: 'Inadimplentes' }
		];
	}
  
	async findAll() {
		return this.customers;
	}

	async findAllByStatus(status) {
		return this.customers.filter(x => x.status === status);
	}
}

module.exports = CustomerRepository;