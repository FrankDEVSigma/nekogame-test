const express = require('express');
const morgan = require('morgan');
const router = express.Router();
const { engine }  = require('express-handlebars');
const path =  require('path');
const flash = require('connect-flash');
//const session = require('express-session');
//const MySQLStore = require('express-mysql-session');
//const { database } = require('./keys');
//const pool = require('./database');
const dotenv = require('dotenv');
//const bcrypt = require('bcryptjs');
//const redis = require('redis');
//const RedisStore = require('connect-redis')(session);
//const passport = require('passport');
//const http = require('http');
const cookieParser = require('cookie-parser');


//redisClient.connect();
//INICIALIZACIONES


const app = express();

module.exports = app;




//require('./lib/passport');


// CONFIGURACIONES || SETTINGS


app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', engine({
	defaultLayout: 'main',
	layoutDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'partials'),
	extname: '.hbs',
	helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

dotenv.config({path:'./env/'+process.env.NODE_ENV+'.env'});

app.use(morgan('dev'));

//PUBLIC

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
// MIDDLEWARES


/*app.use(session({
	
	secret: 'nekorsession',
	resave: false,
	saveUninitialized: false,
	store: new MySQLStore(database)
	//store: new RedisStore({client: redisClient})

}));/*



app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
//app.use(passport.initialize());
//app.use(passport.session());
app.use(flash());




//GLOBAL VARIABLES

app.use((req, res, next) => {
	app.locals.navbtnstatelogin = req.flash('navbtnstatelogin');
	next();

});

app.use((req, res, next) => {
	app.locals.navbtnstateregister = req.flash('navbtnstateregister');
	next();

});

app.use((req, res, next) => {
	app.locals.success = req.flash('success');
	next();

});


app.use((req, res, next)=>{
 app.locals.registersuccess1= req.flash('registersuccess1');
 next();
});

app.use((req, res, next)=>{
 app.locals.notifMedalFirst= req.flash('notifMedalFirst');
 next();
});

app.use((req, res, next)=>{
 app.locals.notifExpFirst= req.flash('notifExpFirst');
 next();
});

app.use((req, res, next)=>{
 app.locals.roulettewinner= req.flash('roulettewinner');
 next();
});

app.use((req, res, next)=>{
 app.locals.error= req.flash('error');
 next();
});

app.use((req, res, next)=>{
 app.locals.good= req.flash('good');
 next();
});

app.use((req, res, next)=>{
 app.locals.playtomen= req.flash('playtomen');
 next();
});

app.use((err, req, res, next)=> {
    res.send({ title: "No encontrado", description: 'Recurso no encontrado', error: '404' });
    next();
});





/*function error404(req, res, next){
	const error = new Error(),
		locals = {
			title: 'Error 404',
			description: 'Recurso no encontrado.',
			error: error
		}
	error.status = 404;

	res.render('general/error', locals);
	next();
}*/


//ROUTES || RUTAS

//app.use(require('./routes/'));
//app.use(require('./routes/users'));
app.use(require('./routes/general'));



















