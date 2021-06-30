const express = require('express');
const joi = require('joi');

const router = express();

const { UsersControllers } = require('../controllers/users');
const { isAuth } = require('../middleware/access');

const RouterUsers = {
  signIn: async (req, res, next) => {
    const { email, password } = req.body;

    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().required()
    })
    
    const value = await schema.validate({ email, password });
    if (typeof value.error == 'object') {
      res.status(400).send(value);
    }

    const { ok, message, user } = await UsersControllers.login(email, password);
    if (!ok) {
      res.redirect(`/admin/login?error=${message}`);
    }

    req.session._id = user._id;
    req.session.email = user.email;
    req.session.isLogged = true;

    res.redirect('/admin');
  },

  signUp: async (req, res, next) => {
    const { first_name, last_name, email, password } = req.query;

    const schema = joi.object({
      email: joi.string().email().required(),
      first_name: joi.string().required(),
      last_name: joi.string().required(),
      password: joi.string().required()
    });

    const value = await schema.validate({ first_name, last_name, email, password });
    if (typeof value.error == 'object') {
      res.status(400).send(value);
    }

    const result = await UsersControllers.create({ first_name, last_name, email, password });
    res.status(200).send(result);
  }
};

router.post('/login', RouterUsers.signIn);
router.get('/create', isAuth, RouterUsers.signUp);

module.exports = router;