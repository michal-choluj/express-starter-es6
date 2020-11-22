// const config = require('@ws/config');
// const Instances = require('@tec/platform-shared-knex-instances');
// const instances = new Instances(config.get('database.service'), config.get('database.ttl'));
const dbManager = {
    getInstance() {
        return {};
    }
};
export default dbManager;
