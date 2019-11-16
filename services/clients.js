const MongoLib = require('../lib/mongo');

class ClientsService {
    constructor() {
        this.collection = 'clients';
        this.mongoDB = new MongoLib();
    }

    async getClients({ tags }) {
        const query = tags && { tags: { $in: tags }};
        const clients = await this.mongoDB.getAll(this.collection, query);
        return clients || [];
    }

    async getClient({ clientId }) {
        const client = await this.mongoDB.get(this.collection, clientId);
        return client || {};
    }

    async createClient({ client }) {
        const createdClientId = await this.mongoDB.create(this.collection, client);
        return createdClientId;
    }

    async updateClient({ clientId, client } = {}) {
        const updatedClientId = await this.mongoDB.update(this.collection, clientId, client);
        return updatedClientId;
    }

    async deleteClient({ clientId }) {
        const deletedClientId = await this.mongoDB.delete(this.collection, clientId);
        return deletedClientId;
    }
};

module.exports = ClientsService;