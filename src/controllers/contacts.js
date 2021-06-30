const { ContactColl } = require('../models/contact');

const ContactsControllers = {
  create: async (body) => {
    const contact = new ContactColl(body);
    const result = await contact.save();
    return { ok: true, result };
  }
}

module.exports.ContactsControllers = ContactsControllers;