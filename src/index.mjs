import express from 'express';
import morgan from 'morgan';
import myBikeRoutes from './routes/myBikeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import passport from 'passport';

const app = express();

app.get('/', (req, res) => {

    res.json({
        message: 'welcome'
    });
});

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(myBikeRoutes);
app.use(userRoutes);

const port = process.env.PORT || 1338;
app.listen(port, () => {
    console.log('app is started');
});