const express = require('express');
const joi = require('joi');

const router = express();

const { ContactsControllers } = require('../controllers/contacts');

const RouterContacts = {
  add: async (req, res, next) => {
    const { email, fullname, message } = req.body;

    const schema = joi.object({
      email: joi.string().email().required(),
      fullname: joi.string().required(),
      message: joi.string().required().allow(null).allow("").empty()
    })
    
    const value = await schema.validate({ email, fullname, message });
    if (typeof value.error == 'object') {
      res.status(400).send(value);
    }

    const { ok } = await ContactsControllers.create({ email, fullname, message });

    if (!ok) {
      res.redirect('/?error=Uknown error, try again.');
    }

    res.redirect('/?success=Your request has been accepted!#signup');
  }
};

router.post('/create', RouterContacts.add);

module.exports = router;