import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    type: {type: Number, default: 0, max:8},

    firstName: {type: String, required: true},
    lastName: {type: String, required: true},

    username: {type: String, required: true, unique: true},

    address: {type: String},

    gender: {type: String, required: true},
    email: {type: String, unique: true},
    phone: {type: String, unique: true},

    password: {type: String, select: false},

    birthDate: {type: Date},
    createdAt: {type: Date, default: Date.now()}
});

export default mongoose.model('User', UserSchema);