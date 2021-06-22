const express = require('express');
const router = express.Router();
const User = require("../../models/user")
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const withAuth = require('../../middleware/middleware');

const secret = 'mysecretsshhh';

router.post('/', function (req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res
            .json({ auth: false, message: "Please enter all required fields." })
    }
    User.findOne({ email }).then((user) => {
        if (user) {
            const passwordCorrect = (password == user.password)

            if (passwordCorrect) {
                const payload = { email };
                const token = jwt.sign(payload, secret, {
                    expiresIn: '1h'
                });
                console.log("done")
                res.json({ token: token, auth: true });
            }
            else {
                res.json({ auth: false, message: 'The password you’ve entered is incorrect' });
            }
        }
        else {
            res.json({ auth: false, message: "The email you entered isn’t connected to an account." })
        }
    }).catch(err => {
        res.json({ message: "error 1" })
    })
});

module.exports = router 