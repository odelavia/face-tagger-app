const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const keys = require('./config/keys');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const leaderboards = require('./controllers/leaderboards');
const image = require('./controllers/image');
const auth = require('./controllers/authorization');

const port = process.env.PORT || 3000;

const db = knex({
  client: 'pg',
  connection: keys.DB
});

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors())
app.use(bodyParser.json());

app.post('/signin', signin.signinAuthentication(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db) })
app.post('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileUpdate(req, res, db) })
app.put('/image', auth.requireAuth, (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', auth.requireAuth, (req, res) => { image.handleApiCall(req, res) })
app.get('/leaderboards', (req, res) => { leaderboards.handleGetAllUsers(req, res, db) })
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, ()=> {
  console.log(`App is listening on port ${port}`);
})
