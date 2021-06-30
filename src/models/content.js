const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  header: {
    title: { type: String, required: false, default: 'The most intelligent social matching app' },
    text: { type: String, required: false, default: 'Find friends who love what you love. Data-driven intelligence that puts the power of friendship in your hands.' },
    link: { type: String, required: false, default: '/#signup' },
    linkText: { type: String, required: false, default: 'Find Your Tribe' },
    imageCover: { type: String, required: false, default: '/media/cover.svg' },
  },

  whyBridge: {
    imageWhyBridge: { type: String, required: false, default: '/media/section-1.jpg' },
    titleWhyBridge: { type: String, required: false, default: 'Meaningful Matches, Powered by AI!' },

    card1: {
      image: { type: String, required: false, default: '/media/icons/idea.png' },
      title: { type: String, required: false, default: 'Intelligent' },
      text: { type: String, required: false, default: 'Get smart matches from day one. Bridge\'s advanced AI learns what makes you, you.' }
    },
    card2: {
      image: { type: String, required: false, default: '/media/icons/user.png' },
      title: { type: String, required: false, default: 'Streamlined' },
      text: { type: String, required: false, default: 'Forget swiping and holding your breath for a match. Just intelligent matches you can chat with instantly' }
    },
    card3: {
      image: { type: String, required: false, default: '/media/icons/lock.png' },
      title: { type: String, required: false, default: 'Meaningful' },
      text: { type: String, required: false, default: 'You\'re never a profile pic in a sea of selfies. Only matches can see your profile.' }
    },
    card4: {
      image: { type: String, required: false, default: '/media/icons/plane.png' },
      title: { type: String, required: false, default: 'Platonic' },
      text: { type: String, required: false, default: 'Designed around building genuine friendship, online and offline.' }
    }
  },

  features: {
    titleFeatures: { type: String, required: false, default: 'Features' },
    textFeatures: { type: String, required: false, default: 'The art of finding your tribe' },
    linkFeatures: { type: String, required: false, default: '/#signup' },
    linkTextFeatures: { type: String, required: false, default: 'Join Today' },

    feature1: {
      image: { type: String, required: false, default: '/media/cards/card-1.svg' },
      title: { type: String, required: false, default: 'Personalized profiles' },
      text: { type: String, required: false, default: 'Tell Bridge your interests and passions to get matched with friends who share the same values.' }
    },
    feature2: {
      image: { type: String, required: false, default: '/media/cards/card-2.svg' },
      title: { type: String, required: false, default: 'Geo-social matching' },
      text: { type: String, required: false, default: 'Match with people who go where you go. Location-based matching shows you nearby kindred spirits.' }
    },
    feature3: {
      image: { type: String, required: false, default: '/media/cards/card-3.svg' },
      title: { type: String, required: false, default: 'Silent mode' },
      text: { type: String, required: false, default: 'Need a little alone time? Switch to Silent Mode to pause matches for the day.' }
    },
    feature4: {
      image: { type: String, required: false, default: '/media/cards/card-4.svg' },
      title: { type: String, required: false, default: 'Chat' },
      text: { type: String, required: false, default: 'Dive straight into your shared interests over chat, or arrange a first meet somewhere public.' }
    },
    feature5: {
      image: { type: String, required: false, default: '/media/cards/card-5.svg' },
      title: { type: String, required: false, default: 'Real-time activities' },
      text: { type: String, required: false, default: 'Want to meet fellow fans to watch the game with? Find people nearby for your next activity.' }
    },
    feature6: {
      image: { type: String, required: false, default: '/media/cards/card-6.svg' },
      title: { type: String, required: false, default: 'Private profiles' },
      text: { type: String, required: false, default: 'Bridge only shares your profile with awesome people like you (i.e the people you match with.' }
    }
  },

  howork: {
    titleHowWork: { type: String, required: false, default: 'How Bridge Works' },
    textHowWork: { type: String, required: false, default: '' },
    linkHowWork: { type: String, required: false, default: '/#signup' },
    linkTextHowWork: { type: String, required: false, default: 'Sign Up For Early Access' },
    
    howWork1: {
      image: { type: String, required: false, default: '/media/icons/student.png' },
      title: { type: String, required: false, default: 'Tell bridge about you' },
      text: { type: String, required: false, default: 'For the best matches, fill your interests, hobbies and passions.' }
    },
    howWork2: {
      image: { type: String, required: false, default: '/media/icons/robot.svg' },
      title: { type: String, required: false, default: 'Match with similar minds' },
      text: { type: String, required: false, default: 'Bridge uses AI to match you with people who share your energy.' }
    },
    howWork3: {
      image: { type: String, required: false, default: '/media/icons/communication.svg' },
      title: { type: String, required: false, default: 'Build meaningful friendship' },
      text: { type: String, required: false, default: 'Make lifelong connections. Message, meet IRL, and grow your relationships.' }
    },
    howWork4: {
      image: { type: String, required: false, default: '/media/icons/dancing.svg' },
      title: { type: String, required: false, default: 'Grow with Bridge' },
      text: { type: String, required: false, default: 'Bridge uses machine learning to constantly improve the quality of your matches.' }
    },  
  },

  testimonials: {
    titleTestimonials: { type: String, required: false, default: 'Meet your level of crazy' },

    testimonial1: {
      image: { type: String, required: false, default: '/media/amanda.jpg' },
      name: { type: String, required: false, default: 'Amanda' },
      info: { type: String, required: false, default: '23 Non-Binary 0.6 Miles' },
      text: { type: String, required: false, default: 'Just moved across the country! Anyone else new here and want to explore the city together? 🗺' }
    },
    testimonial2: {
      image: { type: String, required: false, default: '/media/tunde.jpg' },
      name: { type: String, required: false, default: 'Tunde' },
      info: { type: String, required: false, default: '36 Male 22 Miles' },
      text: { type: String, required: false, default: 'I\'ve just turned vegan but I have no vegan friends! Who wants to find the best vegan grub in the city with me?' }
    },
    testimonial3: {
      image: { type: String, required: false, default: '/media/maddie.jpg' },
      name: { type: String, required: false, default: 'Maddie' },
      info: { type: String, required: false, default: '28 Female 3 Miles' },
      text: { type: String, required: false, default: 'Looking for everything from Fridays out on the town 🥳 to long Sunday morning walks. Just looking for friends I click with!' }
    },
  },

  contact: {
    titleContact: { type: String, required: false, default: 'Stay in the know' },
    imageContact: { type: String, required: false, default: '/media/contact.svg' },
    fullname: { type: String, required: false, default: 'Full Name' },
    emailaddress: { type: String, required: false, default: 'Email address' },
    labelmessage: { type: String, required: false, default: 'Got a burning question? Drop us a note!' },
    message: { type: String, required: false, default: 'Type a message here' },
    buttonvalue: { type: String, required: false, default: 'Get Early Access' }
  },

  socials: {
    linkedin: { type: String, required: false, default: 'https://linkedin.com/' },
    instagram: { type: String, required: false, default: 'https://instagram.com/' },
    facebook: { type: String, required: false, default: 'https://facebook.com/' },
    twitter: { type: String, required: false, default: 'https://twitter.com/' },
  }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const ContentColl = mongoose.model('contents', ContentSchema);
module.exports.ContentColl = ContentColl;