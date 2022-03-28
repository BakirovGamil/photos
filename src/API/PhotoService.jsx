export default class PhotoService {
    static async getAll(limit) {
        const response = fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=${limit}`);

        return response;
    }

    static async getById(id) {
        const response = fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);

        return response;
    }

    static async getByUserId(id) {
        const response = fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);

        return response;
    }
};