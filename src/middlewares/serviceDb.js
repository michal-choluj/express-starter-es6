import { asValue } from 'awilix';
/**
 * Find or create a connection to the proper database and inject it into the scoped container (IoC)
 */
export default ({ serviceId, dbManager }) => {
    return (req, res, next) => {
        const knex = dbManager.getInstance(serviceId);
        req.container.register('knex', asValue(knex));
        next();
    };
};
