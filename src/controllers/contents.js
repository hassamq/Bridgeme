const { ContentColl } = require('../models/content');

const ContentsController = {
  init: async () => {
    const contents = await ContentColl.find();

    if (contents.length > 0) {
      return { id: contents[0]._id };
    }

    const contentInit = new ContentColl();
    const result = await contentInit.save();
    return result;
  },

  cover: async (id, body) => {
    const content = await ContentColl.findOne({ _id: id });
    
    content.header.title = body['title'];
    content.header.text = body['text'];  
    content.header.link = body['link'];  
    content.header.linkText = body['linkText'];  
    content.header.imageCover = body['imageCover'];  
    
    const result = await content.save();
    return result;
  },

  whyBridge: async (id, body) => {
    const content = await ContentColl.findOne({ _id: id });

    content.whyBridge.titleWhyBridge = body['titleWhyBridge'];  
    content.whyBridge.imageWhyBridge = body['imageWhyBridge'];  

    content.whyBridge.card1.image = body['card1.image'];
    content.whyBridge.card1.title = body['card1.title'];
    content.whyBridge.card1.text = body['card1.text'];
    content.whyBridge.card2.image = body['card2.image'];
    content.whyBridge.card2.title = body['card2.title'];
    content.whyBridge.card2.text = body['card2.text'];
    content.whyBridge.card3.image = body['card3.image'];
    content.whyBridge.card3.title = body['card3.title'];
    content.whyBridge.card3.text = body['card3.text'];
    content.whyBridge.card4.image = body['card4.image'];
    content.whyBridge.card4.title = body['card4.title'];
    content.whyBridge.card4.text = body['card4.text'];
    
    const result = await content.save();
    return result;
  },

  features: async (id, body) => {
    const content = await ContentColl.findOne({ _id: id });

    content.features.titleFeatures = body['titleFeatures'];
    content.features.textFeatures = body['textFeatures'];
    content.features.linkFeatures = body['linkFeatures'];
    content.features.linkTextFeatures = body['linkTextFeatures'];

    content.features.feature1.title = body['feature1.title'];
    content.features.feature1.image = body['feature1.image'];
    content.features.feature1.text = body['feature1.text'];
    content.features.feature2.title = body['feature2.title'];
    content.features.feature2.image = body['feature2.image'];
    content.features.feature2.text = body['feature2.text'];
    content.features.feature3.title = body['feature3.title'];
    content.features.feature3.image = body['feature3.image'];
    content.features.feature3.text = body['feature3.text'];
    content.features.feature4.title = body['feature4.title'];
    content.features.feature4.image = body['feature4.image'];
    content.features.feature4.text = body['feature4.text'];
    content.features.feature5.title = body['feature5.title'];
    content.features.feature5.image = body['feature5.image'];
    content.features.feature5.text = body['feature5.text'];
    content.features.feature6.title = body['feature6.title'];
    content.features.feature6.image = body['feature6.image'];
    content.features.feature6.text = body['feature6.text'];

    const result = await content.save();
    return result;
  },

  howItWork: async (id, body) => {
    const content = await ContentColl.findOne({ _id: id });

    content.howork.titleHowWork = body['titleHowWork'];
    content.howork.textHowWork = body['textHowWork'];
    content.howork.linkHowWork = body['linkHowWork'];
    content.howork.linkTextHowWork = body['linkTextHowWork'];

    content.howork.howWork1.image = body['howWork1.image'];
    content.howork.howWork1.title = body['howWork1.title'];
    content.howork.howWork1.text = body['howWork1.text'];
    content.howork.howWork2.image = body['howWork2.image'];
    content.howork.howWork2.title = body['howWork2.title'];
    content.howork.howWork2.text = body['howWork2.text'];
    content.howork.howWork3.image = body['howWork3.image'];
    content.howork.howWork3.title = body['howWork3.title'];
    content.howork.howWork3.text = body['howWork3.text'];
    content.howork.howWork4.image = body['howWork4.image'];
    content.howork.howWork4.title = body['howWork4.title'];
    content.howork.howWork4.text = body['howWork4.text'];
    
    const result = await content.save();
    return result;
  },

  testimonials: async (id, body) => {
    const content = await ContentColl.findOne({ _id: id });

    content.testimonials.titleTestimonials = body['titleTestimonials'];

    content.testimonials.testimonial1.image = body['testimonial1.image'];
    content.testimonials.testimonial1.name = body['testimonial1.name'];
    content.testimonials.testimonial1.info = body['testimonial1.info'];
    content.testimonials.testimonial1.text = body['testimonial1.text'];

    content.testimonials.testimonial2.image = body['testimonial2.image'];
    content.testimonials.testimonial2.name = body['testimonial2.name'];
    content.testimonials.testimonial2.info = body['testimonial2.info'];
    content.testimonials.testimonial2.text = body['testimonial2.text'];

    content.testimonials.testimonial3.image = body['testimonial3.image'];
    content.testimonials.testimonial3.name = body['testimonial3.name'];
    content.testimonials.testimonial3.info = body['testimonial3.info'];
    content.testimonials.testimonial3.text = body['testimonial3.text'];

    const result = await content.save();
    return result;
  },

  contact: async (id, body) => {
    const content = await ContentColl.findOne({ _id: id });

    content.contact.titleContact = body['titleContact'];
    content.contact.imageContact = body['imageContact'];
    content.contact.fullname = body['fullname'];
    content.contact.emailaddress = body['emailaddress'];
    content.contact.labelmessage = body['labelmessage'];
    content.contact.message = body['message'];
    content.contact.buttonvalue = body['buttonvalue'];

    const result = await content.save();
    return result;
  },

  socials: async (id, body) => {
    const content = await ContentColl.findOne({ _id: id });

    content.socials.linkedin = body['linkedin']
    content.socials.instagram = body['instagram']
    content.socials.facebook = body['facebook']
    content.socials.twitter = body['twitter']

    const result = await content.save();
    return result;
  },
}

module.exports.ContentsController = ContentsController;