const express = require('express');
var app = require('../app');
const router = express.Router();
const {io} = require('../bin/www');
const dateC = new Date();
const date_now = Date.now();
const path =  require('path');
const fs = require("fs");

//const dirPathPDFs = "/home/frank_dev/Desktop/RESPALDO DEV NEKO/Neko Game/nekogame-app/src/public/pdfs";
const dirPathPDF = __dirname;

const dirPathPDFs = dirPathPDF.replace('/routes', '/public/pdfs');



const pdfs = fs.readdirSync(dirPathPDFs).map(name => {
  return {
    name: path.basename(name, ".pdf"),
    url: `/pdfs/${name}`
  };
});



const gServices = require('../services/general/generalServices');

function genUUID(){

	let now = new Date().getTime();

	let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'. replace(/[xy]/g, function(c){
		let random = (now + Math.random() * 16) % 16 | 0;
		now = Math.floor(now / 16);

		return (c == 'x' ? random : (random & 0x3 | 0x8)).toString(16);
	});
	return uuid;
}


//const errorHandler = require('../app');


router.get('/', async (req, res) =>{

	res.render('general/home', {
		whitepaperMeme: pdfs[4],
		whitepaperFormal: pdfs[3],
		whitepaperNGL: pdfs[2],
		navNormal: true
	});

});

router.get('/projects/nekogamesluck', async (req, res) =>{

	res.render('infoproyects/nekogamesluck', {
		whitepaperNGL: pdfs[2],
		navEmpty: true
	});

});


router.get('/projects/nekogamecasino', async (req, res) =>{

	res.render('infoproyects/nekogamecasino', {
		navEmpty: true
	});

});



router.get('/projects/nekogamenetwork', async (req, res) =>{

	res.render('infoproyects/nekogamenetwork', {
		navEmpty: true
	});

});

router.get('/projects/wakeuptheneko', async (req, res) =>{

	res.render('infoproyects/wakeuptheneko', {
		navEmpty: true
	});

});

router.get('/projects/nekogamemetaverse', async (req, res) =>{

	res.render('infoproyects/nekogamemetaverse', {
		navEmpty: true
	});

});


router.get('/projects/nft/nekogameauction', async (req, res) =>{

	res.render('infoproyects/nekogameauction', {
		navEmpty: true
	});

});


router.get('/devs', async (req, res) =>{

	res.render('infogeneral/devs', {
		navEmpty: true
	});

});

router.get('/nekogame', async (req, res) =>{

	res.render('infogeneral/nekogame', {
		whitepaperMeme: pdfs[4],
		whitepaperFormal: pdfs[3],
		navEmpty: true
	});

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
}
*/
/*const errar = (err, req, res, next)=>{
	console.log(err);
	res.status(404).send('Página no encontrada');
	next()
}*/

/*router.use((req, res)=>{
	res.send('Página no encontrada');
});*/
router.get('*', function(req, res){
  res.send('ruta no encontrada');

});







module.exports = router;