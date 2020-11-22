import express from 'express';
import bodyParser from 'body-parser';
import container from './container';
import context from './middlewares/context';
import { scopePerRequest } from 'awilix-express';

export default class Application {
    constructor({ logger, router, serviceDb, serviceId, serviceAccess }) {
        this.express = express();
        this.express.disable('x-powered-by');
        this.express.use(bodyParser.json());
        this.express.use(scopePerRequest(container));
        this.express.use(context);
        this.express.use('/va/:serviceId([0-9]+)', [serviceId, serviceAccess, serviceDb, router]);
        this.express.use((err, req, res, next) => {
            logger.error(err);
            res.status(500);
            res.send({ message: err.message });
        });
    }

    listen(...args) {
        return this.express.listen.apply(this.express, args);
    }
}
