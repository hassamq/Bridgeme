const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


UserSchema.pre('save', function (next) {
	if (!(this.isNew || this.isModified('password'))) {
    return next();
  }

	const document = this;
	
  bcrypt.hash(document.password, saltRounds, function (err, hashedPassword) {
		if (err) {
			throw err;
		}

		document.password = hashedPassword;
		next();
	});
});


UserSchema.methods = {
	isCorrectPassword: async function (password) {
		return bcrypt.compare(password, this.password);
	}
};


const UserColl = mongoose.model('users', UserSchema);
module.exports.UserColl = UserColl;