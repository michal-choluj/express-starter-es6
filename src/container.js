import { asClass, createContainer, asFunction } from 'awilix';
import serviceId from './middlewares/serviceId';
import serviceDb from './middlewares/serviceDb';
import serviceAccess from './middlewares/serviceAccess';
import registerApplication from './application';
import registerUserModule from './modules/user';
import router from './router';
import server from './server';
import app from './app';

const container = createContainer();

// Register Application
container.register({
    app: asClass(app).singleton(),
    server: asClass(server).singleton(),
    router: asFunction(router).singleton(),
    serviceId: asFunction(serviceId).scoped(),
    serviceDb: asFunction(serviceDb).scoped(),
    serviceAccess: asFunction(serviceAccess).scoped()
});

// Register Modules
registerApplication(container);
registerUserModule(container);

export default container;
