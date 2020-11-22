import { Router } from 'express';
export default ({ userRouter }) => {
    const router = Router({ mergeParams: true });
    router.use('/user', userRouter);
    return router;
};
