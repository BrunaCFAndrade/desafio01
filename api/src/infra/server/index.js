const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { loadControllers, scopePerRequest } = require('awilix-express');

class App {

	constructor(appConfig) {
		this.appConfig = appConfig;
	}

	start(container, callback) {

		const app = this._create(container);
		const port = this.appConfig.port;

		app.listen(port, callback(port));
	}

	_create(container) {

		const app = express();

		app.use(bodyParser.urlencoded({extended: false}));
		app.use(bodyParser.json());
		app.use(cors());

		app.use(scopePerRequest(container));
		app.use(loadControllers('../../controller/*.js', {cwd: __dirname}));

		return app;
	}
}

module.exports = App;