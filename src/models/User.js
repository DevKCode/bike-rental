import Sequelize from 'sequelize';
import { sequelize } from '../config/sequelize.js';

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(255)
    },
    age: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});
export default User;