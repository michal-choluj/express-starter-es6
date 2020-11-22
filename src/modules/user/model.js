export default class UserModel {
    static bindKnex() {
        return this;
    }

    static query() {
        return {
            findById: (id) => {
                return new Promise((resolve) => {
                    resolve({
                        id: 1,
                        name: 'Bob'
                    });
                });
            },
            insert: ({ name }) => {
                return new Promise((resolve) => {
                    resolve({
                        id: 1,
                        name
                    });
                });
            }
        };
    }
}
