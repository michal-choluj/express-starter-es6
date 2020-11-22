import { asValue, asClass, asFunction } from 'awilix';
import controller from './controller';
import service from './service';
import router from './router';
import model from './model';

export default (container) => {
    container.register({
        userModel: asValue(model),
        userService: asClass(service).scoped(),
        userController: asValue(controller),
        userRouter: asFunction(router).singleton()
    });
    return container;
};
