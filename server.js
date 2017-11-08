const express = require('express');
const app = express();
const port = process.env.PORT || 1339;

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser  = require('body-parser');
const session = require('express-session');

app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms

// required for passport
// app.use(session({ secret: 'scotch' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
// require('./server/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


app.use('/public', express.static('./public'));
app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});


app.listen(port);
console.log('listening on port ' + port);
