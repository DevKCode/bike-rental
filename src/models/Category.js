import Sequelize from 'sequelize'
import { sequelize } from '../config/sequelize.js';
import Bikes from './MyBike.js';

const Category = sequelize.define('Category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(250),
        allowNull: false,
    },
    bikesId: {
        type: Sequelize.INTEGER,
        references: 'bikes',
        referencesKey: 'id'
    }
});

Bikes.hasMany(Category);

export default Category;