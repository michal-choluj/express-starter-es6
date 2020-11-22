import { makeInvoker } from 'awilix-express';
import { Router } from 'express-promisify-router';
export default ({ userController }) => {
    const api = makeInvoker(userController);
    const router = Router({ mergeParams: true });
    router.get('/', api('find'));
    router.post('/', api('create'));
    router.put('/', api('update'));
    router.delete('/', api('delete'));
    return router;
};
