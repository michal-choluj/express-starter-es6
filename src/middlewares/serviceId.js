import { asValue } from 'awilix';
/**
 * Find the service ID and inject it into the scoped container (IoC)
 */
export default () => {
    return (req, res, next) => {
        const { serviceId } = req.params;
        req.container.register('serviceId', asValue(serviceId));
        next();
    };
};
