const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: false, default: '' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const ContactColl = mongoose.model('contacts', ContactSchema);
module.exports.ContactColl = ContactColl;