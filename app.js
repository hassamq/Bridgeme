const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const session = require('express-session')
const moment = require('moment');

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

  app.use('/admin/contents', routerContents);
  app.use('/admin/users', routerUsers);
  app.use('/contacts', routerContacts);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server listened in the port ${PORT}.`); });