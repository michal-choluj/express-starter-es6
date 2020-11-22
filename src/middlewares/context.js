import { createNamespace } from 'cls-hooked';

/**
 * Express.js middleware that is responsible for
 * initializing the context for each request.
 **/
function middleware(req, res, next) {
    req.context = createNamespace('context');
    req.context.run(() => next());
}

export default middleware;
