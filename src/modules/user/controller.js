import createError from 'http-errors';

class UserController {
    /**
     * User Controller
     * @param {UserService} options.userService UserService class
     */
    constructor({ userService }) {
        this.userService = userService;
    }

    async find(req, res) {
        const user = await this.userService.findById();
        if (!user) {
            throw createError(404, 'User not found');
        }
        return user;
    }

    async create(req, res) {
        return this.userService.create({});
    }

    async update(req, res) {
        return this.userService.update({});
    }

    async remove(req, res) {
        return this.userService.remove({});
    }
}

export default UserController;
