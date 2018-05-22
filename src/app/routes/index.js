import userRoute from './userRoute';

export default (app) => {
    app.use('/api',userRoute());
}