const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

const users = [];

router.post('/register', async(req, res) => {
    const { email, username, password } = req.body;

    const existingUser = users.find(
        (user) => user.email || user.username === email || username
    );

    if(existingUser) {
        return res.status(400).json({
            message: "User Already Exists!"
        });
    }

    const hashedPassword = await bcrypt.hash(
        password,
        10
    );

    const user = {
        id: Date.now(),
        username: username,
        email: email,
        password: hashedPassword
    };

    users.push(user);
    console.log(user.password);

    res.status(201).json({
        message: "User Registered!"
    });
});

router.get('/users', (req, res) => {
    res.status(200).send(users);
});

module.exports = router;