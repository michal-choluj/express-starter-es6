// const knex = require('knex');
// const config = require('@ws/config');
// const admin = knex({
//     client: 'mysql',
//     debug: config.get('database.admin.debug'),
//     connection: {
//         port: config.get('database.admin.port'),
//         host: config.get('database.admin.host'),
//         user: config.get('database.admin.user'),
//         password: config.get('database.admin.password'),
//         database: config.get('database.admin.name'),
//         timezone: 'UTC'
//     },
//     pool: {
//         min: 0,
//         max: config.get('database.admin.connectionLimit')
//     }
// });
// module.exports = admin;
export default {};
