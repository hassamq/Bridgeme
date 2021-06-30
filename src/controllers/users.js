const { UserColl } = require('../models/user');

const UsersControllers = {
  login: async (email, password) => {
    const user = await UserColl.findOne({ email });

    if (!user) {
      return { ok: false, message: 'Email or Password are not valid', user: null };
    }

    const pwd = await user.isCorrectPassword(password);
    if (!pwd) {
      return { ok: false, message: 'Email or Password are not valid.', user: null };
    }

    return { ok: true, message: 'Ok', user };
  },

  create: async (body) => {
    const user = new UserColl(body);
    const result = await user.save();
    return result;
  }
}

module.exports.UsersControllers = UsersControllers;