export default class UserService {
    constructor({ userModel, knex }) {
        this.userModel = userModel.bindKnex(knex);
    }

    async findById(id) {
        return this.userModel.query().findById(id);
    }

    async create(user) {
        const result = await this.userModel.query().insert(user);
        return result;
    }

    async update(user) {
        const result = await this.userModel.query().update(user);
        return result;
    }

    async remove(user) {
        const result = await this.userModel.query().remove(user);
        return result;
    }
}
