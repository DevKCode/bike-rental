import express from 'express';
import { create, getlist, createCategory, createBikeCategory } from '../controllers/MyBikeController.js';

const myBikeRoutes = express.Router();

myBikeRoutes.post('/bike', create);
myBikeRoutes.get('/category', createCategory);
myBikeRoutes.get('/getlist/:id?', getlist);
myBikeRoutes.post('/category', createBikeCategory);

export default myBikeRoutes;