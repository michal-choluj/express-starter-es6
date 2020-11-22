export default class Server {
    constructor({ app, logger }) {
        this.app = app;
        this.logger = logger;
    }

    start() {
        return new Promise((resolve) => {
            const http = this.app.listen(3000, () => {
                const { port } = http.address();
                this.logger.info(`[p ${process.pid}] Listening at port ${port}`);
                resolve(http);
            });
        });
    }
}
