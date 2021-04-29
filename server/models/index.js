import Sequelize from 'sequelize';
import { sequelize } from '../../config/config-db';
import users from './users'
import villas from './villas'


const models = {
    Users: users(sequelize, Sequelize),
    Villas: villas(sequelize, Sequelize),
}

//4. create relation OneToMany | ManyToMany
Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

// 5. export sequalize agar bisa di-call di module lain
export default models;