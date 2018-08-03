// bad practice -> require("./contracts/Inbox.sol"); -> the node engine will try to execute this as if it were a javascript file

// We have to read the contents of the above file

const path = require('path');
const fs = require('fs'); // standard modules, we do not have to npm install them at the terminal

/*
	path module will help us build a directory path from the complile.js to inbox.sol
	-> by using the path module instead of writing the path we are guranteed cross platfrom compatibility
*/
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
// __dirname is a constant defined by node and it is always set to the current working dir
// this will take you from the root dir to the inbox folder

// NOW READING THE RAW SOURCE CODE FROM OUR CONTRACTS
const source = fs.readFileSync(inboxPath,'utf8');

//console.log(solc.compile(source,1).contracts[':Inbox']['opcodes']);
module.exports = solc.compile(source,1).contracts[':Inbox']; // exporting the object(just the inbox contracts object)








