import express from 'express';
let userRoute = express.Router();
import {
    create,
    login,
    update
} from './../controllers/userController';

export default () => {
    userRoute.route('/user/register')
        .post((req, res) => {
            const user = req.body;
            let user = create(user);
            if (user.success) {
                res.status(user.status).json({
                    user: user.user
                });
            } else {
                res.status(user.status).json({
                    message: user.message
                });
            }
        });

    userRoute.route('/user/login')
        .post((req, res) => {
            const {
                username,
                password
            } = req.body;
            let user = login(username, password);
            if (user.success) {
                res.status(user.status).json({
                    user: user.user
                });
            } else {
                res.status(user.status).json({
                    message: user.message
                });
            }
        });

    //USER VALIDATION IS REQUIRED
    userRoute.route('/user/update')
        .post((req, res) => {
            const {
                id,
                updates
            } = req.body;
            let updated = update(id, updates);
            if (updated.success) {
                res.status(updated.status).json(updated);
            } else {
                res.status(updated.status).json({
                    message: updated.message
                });
            }
        });

    return userRoute;
}