const { asClass, InjectionMode, createContainer } = require('awilix');

const Server = require('./infra/server');
const AppConfig = require('./infra/config/app.config');

const CustomerApplication = require('./application/customer.app');
const resolveDB = require('./infra/config/database.config');

class Bootstrap {

	constructor() {
		this.instance = this._createContainer();
	}
  
	run(cb) {
		const app = this.instance.resolve('app');
		app.start(this.instance, cb);
	}

	_createContainer() {

		const container = createContainer({injectionMode: InjectionMode.CLASSIC});
  
		container.register({
			app: asClass(Server).singleton(),
			appConfig: asClass(AppConfig).singleton(),
			customerApplication: asClass(CustomerApplication).singleton()
		});

		resolveDB(container);

		return container;
	}
}

module.exports = Bootstrap;