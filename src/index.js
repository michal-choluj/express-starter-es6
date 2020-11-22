import container from './container';
const server = container.resolve('server');
server.start().catch(() => {
    process.exit();
});
