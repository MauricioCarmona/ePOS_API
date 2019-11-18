const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');

class UsersService {
    constructor() {
        this.collection = 'users';
        this.mongoDB = new MongoLib();
    }

    async getUsers({ user_name }) {
        const query = user_name && { user_name: { $in: user_name }};
        const users = await this.mongoDB.getAll(this.collection, query);
        return users || [];
    }

    async getUser({ email }) {
        const [ user ] = await this.mongoDB.getAll(this.collection, { email });
        return user || {};
    }

    async createUser({ user }) {
        const { user_name, email, password } = user;
        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUserId = await this.mongoDB.create(this.collection, {
            user_name,
            email,
            password: hashedPassword
        });
        return createdUserId;
    }

    async updateUser({ userId, user } = {}) {
        const updatedUserId = await this.mongoDB.update(this.collection, userId, user);
        return updatedUserId;
    }

    async deleteUser({ userId }) {
        const deletedUserId = await this.mongoDB.delete(this.collection, userId);
        return deletedUserId;
    }
};

module.exports = UsersService;