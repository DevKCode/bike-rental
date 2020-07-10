import Sequelize from 'sequelize';

// Set up the config

export const sequelize = new Sequelize("bikedb", 'root', '', { host: '127.0.0.1', dialect: 'mysql' });

