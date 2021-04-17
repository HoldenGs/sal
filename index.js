const express = require('express')
const app = express()
const flash = require('express-flash')
const bodyParser = require('body-parser')
require('dotenv').config({path: '.env'});

app.set('view engine', 'ejs')
app.use(flash())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./public'))

// Use and Require Express Session
app.use(require('express-session')({
	secret: process.env.EXPRESS_SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}));

const PORT = 3000

// Define Routes
app.use('/', require('./routes/index')); 
app.use('/dashboard', require('./routes/dashboard'))
app.use('/learn', require('./routes/learn'))

// @route  GET invalid routes
// @desc   Display page not found message
// @access Public
app.get('*', (req, res) => {
	res.status(404).render('404');
});

app.listen(PORT, () => {
	console.log(`server started... on port ${PORT}`);
});