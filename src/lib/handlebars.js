const { format } = require('timeago.js');


const helpers = {};


helpers.timeago = (timestamp) =>{

	return format(timestamp);
}; 


helpers.ifeq = (a, b, options) =>{
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
};

helpers.ifnoteq = (a, b, options) =>{
    if (a != b) { return options.fn(this); }
    return options.inverse(this);
};


module.exports = helpers;
