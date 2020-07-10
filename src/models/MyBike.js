import Sequelize from 'sequelize'
import { sequelize } from '../config/sequelize.js';

const MyBike = sequelize.define('Bike', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(25),
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER(25),
        allowNull: false
    }
});

export default MyBike;
