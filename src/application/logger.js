import pino from 'pino';
export default pino({
    name: 'WS',
    enabled: !(process.env.LOG_ENABLED === 'false')
});
