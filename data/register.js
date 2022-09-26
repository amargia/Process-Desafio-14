require('../connection/connection.js');
const bcrypt = require('bcrypt');
const User = require('../models/User.js');

const save = async (user) => {
    // save user to database
    const newUser = new User(user);
    try {
        const userExists = await User.findOne({ username: user.username });
        if (userExists) {
            return false;
        } else {
            const hashpassword = await bcrypt.hash(user.password, 8);
            newUser.password = hashpassword;
            await newUser.save();
            return newUser;
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { save };