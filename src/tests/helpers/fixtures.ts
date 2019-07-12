import * as faker from 'faker';
const generateFakeUser = ({username, password}: any): any => {
    return {
        username: username || faker.internet.email(),
        password: password || faker.random.word()
    };
};

export const createUser = ({username, password}: any, model: any): any =>{
    const data = Object.assign({}, generateFakeUser({username, password}));

    return model.query().insert(data);
};

export const emptyTable = async (knex: any, models: any): Promise<void> => {
    const modelsToDestroy = Array.isArray(models) ? models : [models];
    for (let i = 0; i < modelsToDestroy.length; i += 1) {
      await knex.raw('truncate table ' + modelsToDestroy[i].tableName + ' cascade');
    }
};