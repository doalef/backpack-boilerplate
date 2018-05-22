import User from './../models/user';
import Promise from 'bluebird';

export let create = async (user) => {
    try {
        let newUser = new User(user);
        await newUser.save();
        return {
            user: newUser,
            success: true
        };
    } catch (error) {
        return {
            message: error.message,
            success: false,
            status: 500
        }
    }
}

export let login = async (username, password) => {
    try {
        let user = await User.findOne({
            $or: [{
                email: username
            }, {
                username: username
            }],
            password: password
        }).lean();
        return {
            success: (user) ? true : false,
            user: (user) ? user : null,
            status: (user) ? 200 : 400
        }
    } catch (error) {
        return {
            message: error.message,
            success: false,
            status: 500
        };
    }
}

export let update = async (id, updates) => {
    if (id) {
        try {
            let user = await User.findByIdAndUpdate(id, updates).lean();
            if (user) {
                let updated = await User.findById(id).lean();
                return {
                    success: true,
                    olduser: user,
                    updatedUser: updated
                };
            } else {
                return {
                    success: false,
                    message: 'No user was found, given id might be wrong!',
                    status: 400
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error.message,
                status: 500
            }
        }
    } else {
        return {
            success: false,
            message: 'id is required for updating documents',
            status: 400
        }
    }
}

export let remove = async (id) => {
    if (id) {
        try {
            let user = await User.findByIdAndRemove(id).lean();
            if (user) {
                return {
                    success: true,
                    deleteduser: user
                };
            } else {
                return {
                    success: false,
                    message: 'No user was found, given id might be wrong'
                };
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    } else {
        return {
            success: false,
            message: 'id is required for deleting a document'
        };
    }
}