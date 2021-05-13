require('dotenv').config();

const Bootstrap = require('./src/bootstrap');

const bootstrap = new Bootstrap();
bootstrap.run(port => console.log(`Api iniciada e rodando na porta: ${port}.`));