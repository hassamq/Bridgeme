const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const session = require('express-session')
const moment = require('moment');
const fetch = require('node-fetch');

const app = express();

require('dotenv').config();

const { routerContents, routerUsers, routerContacts } = require('./src/routes');
const { ContentColl } = require('./src/models/content');
const { ContactColl } = require('./src/models/contact');
const { isAuth } = require('./src/middleware/access');

app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use('/media', express.static('media'));

app.use(cookieParser());
// app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'Keep it secret', resave: false, saveUninitialized: true, cookie: { secure: false, path: '/'  } }));

const MONGO_URL = 'mongodb+srv://bridge-admindb:oocaTlZiSD6EZYVm@landing-page-main.bjkzj.mongodb.net/bridge';

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// todo fix
db.once('open', function () {
  app.get('/admin/login', (req, res) => {
    return res.render('admin/login', { query: req.query });
  });

  app.get('/admin', isAuth, (req, res) => {
    return res.render('admin/dashboard', { query: req.query });
  });

  app.get('/admin/contacts', isAuth, async (req, res) => {
    return res.render('admin/contacts', {
      contacts: await ContactColl.find(),
      query: req.query,
      moment: moment
    });
  });

  app.get('/admin/contents/index', isAuth, async (req, res) => {
    return res.render('admin/contents', {
      query: req.query,
      moment: moment,
      contents: await ContentColl.findOne({ _id: '60d346e1d51e1d0b3a2b96da' })
      
    });
  });

  app.get('/', async (req, res) => {
    return res.render('home', { query: req.query, contents: await ContentColl.findOne({ _id: '60d346e1d51e1d0b3a2b96da' }) });
  });
  app.get('/privacy-policy', async (req, res) => {
    res.render('privacy', { query: req.query, contents: await ContentColl.findOne({ _id: '60d346e1d51e1d0b3a2b96da' }) });
  });

  app.get('/terms-condition', async (req, res) => {
    res.render('terms', { query: req.query, contents: await ContentColl.findOne({ _id: '60d346e1d51e1d0b3a2b96da' }) });
  });

  app.post('/newsletter',(req,res)=>{
    const email=req.body.email;
    const name=req.body.fullname;
    console.log(email);
    console.log(name);

     // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name,
          
        }
       
      }
    ]
  };

  const postData = JSON.stringify(data);

  fetch('https://us6.api.mailchimp.com/3.0/lists/fc893344b8', {
    method: 'POST',
    headers: {
      Authorization: 'auth 2cb0f9be3b221ee906b5ea1f08122881-us6'
    },
    body: postData
  }).then(res.redirect('/'));

    
    
  });

  

  app.use('/admin/contents', routerContents);
  app.use('/admin/users', routerUsers);
  app.use('/contacts', routerContacts);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server listened in the port ${PORT}.`); });