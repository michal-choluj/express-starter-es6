import { asValue } from 'awilix';
import logger from './logger';
import dbAdmin from './adminDb';
import dbManager from './dbManager';

export default (container) => {
    container.register({
        logger: asValue(logger),
        adminDb: asValue(dbAdmin),
        dbManager: asValue(dbManager)
    });
    return container;
};
