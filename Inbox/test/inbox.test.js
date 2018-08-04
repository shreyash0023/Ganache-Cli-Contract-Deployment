const assert = require('assert'); // standard nodejs lib to assert a statement
const ganache = require('ganache-cli'); // local ethereum test network
const Web3 = require('web3'); // constructor function for web3 (not an instance)

const { interface,bytecode } = require('../compile');
 
/*
	Web3 is connected to a local test network(ganache)
	ganache sets up a list of unlocked (freely send or recieve ether without any concern) accounts by itself

*/


// When we make an instance of web3 we have to set up a provider 
// We can make multiple instances of web3 to connect to a specific Ethereum network

const provider = ganache.provider();

const web3 = new Web3(provider);  // Whenever we do an instance of web3 we have to do some configuration of the instance we have created, in particular we have to setup something called a provider()

// a provider() can be thought of as a communication layer b/w web3 lib and some specific ethereum network 
// web3 is always going to expect you to provide a provider



/*
	******************************************************************
	The before each down below uses promises (.then()) to execute web3
	******************************************************************
*/

/*
beforeEach( () => 
{
	// Get a list of all accounts created by ganache-cli
	// Use one of those accounts to deploy the contract
	web3.eth.getAccounts().then(  fetchedAccounts => {
		console.log(fetchedAccounts);
});



	// every function we call with web3 is async, it always returns a promise

});
*/
// Below we have a async/await execution for before each

let accounts;
let inbox;
let initialString = 'Hi there!';

beforeEach( async ()=>
{
	accounts = await web3.eth.getAccounts();
	

	inbox = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({
		data: '0x'+ bytecode, arguments: [initialString]
	})
	.send({from:accounts[0],gas:'1000000' });


	// inbox.setProvider(provider);

});


describe('Inbox', ()=>
{
		it('deploys a contract', () =>
		{
			 //console.log(accounts); // (To get a list of all 10 unlocked accounts)
			//console.log(inbox);
			assert.ok(inbox.options.address);
			// (keep chaning between the above three(uncomment only one) and do 'npm run test')
		});

		it('has a default message',async () =>
		{

			const message = await inbox.methods.message().call();
			assert.equal(message,initialString);

		});

		it('can change the message', async() => {

			await inbox.methods.setMessage('bye').send({from: accounts[0], gas:'1000000'});
			const message = await inbox.methods.message().call();
			assert.equal(message,'bye');
		});
});

























