var app = require('../app');
const http = require('http');
const config = require('../services_config/config.js');

//const port = process.env.PORT || 4005;
app.set('port', config.PORT);




const server = http.createServer(app);

	
	
server.listen(app.get('port'), ()=>{


	console.log('Server on port', app.get('port'));

	
	
	
});







module.exports.io = require('socket.io')(server);