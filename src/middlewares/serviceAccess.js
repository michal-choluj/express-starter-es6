import { asValue } from 'awilix';
/**
 * Find the proper service and inject it as an object into the scoped container (IoC)
 */
export default ({ serviceId }) => {
    return (req, res, next) => {
        req.container.register(
            'currentService',
            asValue({
                id: 1,
                name: 'Fake service!!!'
            })
        );
        next();
    };
};
