const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// Iterface is the ABI

/*
	We are setting the new provider as the truffle-hdwallet that we have installted. The provider takes 2 arguments. The first argument is the 12 letter phrase of your metamask account. The second argument is the infura link of the rinkby network. 
*/

// ** DO NOT CHANGE CODE ABOVE THIS LINE

// Add your arguments down below  

/*  // <- Remove this after adding your keys

	const provider = new HDwalletProvider(

	'your 12 word metamask key should go here', // -> should be a random generated word sentence (pride tomorrow .. )
	'your rinkeby API key from infura should go here' // ->  something like https://rinkeby.infura.io/v3/eb5a84d378c140... 
);


*/  // <- Remove this after adding your keys

// Uncomment the above section to run the code

// ** DO NOT CHANGE CODE BELOW THIS LINE

const provider = new HDwalletProvider(

	'script pride tomorrow patch dumb lend woman setup fluid balcony negative hint',
	'https://rinkeby.infura.io/v3/eb5a84d378c1401287142b989f9f285c'
);

const web3 = new Web3(provider);
let initialString = 'Hello World!';
const deploy = async () => {

	//const accounts = await web3.eth.getAccounts();
	

	accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account :',accounts[0]);

	const getAccountsAddress = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({
		data: '0x' + bytecode, arguments: [initialString]
	})
	.send({from:accounts[0],gas:'1000000'});

	getAccountsAddress.setProvider(provider);

	console.log('Contract deployed to',getAccountsAddress.options.address);
	
};

deploy();