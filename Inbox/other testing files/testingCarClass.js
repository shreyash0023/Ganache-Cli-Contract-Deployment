const assert = require('assert'); // standard nodejs lib to assert a statement
const ganache = require('ganache-cli'); // local ethereum test network
const Web3 = require('web3'); // constructor function for web3 (not an instance)

const provider = ganache.provider();

const web3 = new Web3(provider);

/*
	*************
	MOCHA TESTING
	*************
*/

// MOCHA WORKING : A test running framework. Any type of javascript code we want to test, front, back or an ethereum code! (General purpose testqng framework)


// There are three functions we need to be aware of 

// 1.  it(a string, () => { }) -> run a test and make an assertion
// 2.  describe(a string, () => { it(a string, () => {}) }) -> group together a collection of it 
// 3.  beforeEach() -> utility fucntion used to extract some amount of logic (only							 write that code out one time) (runs before every 'it' block)


class Car{
	park()
	{
		return 'stopped';
	}

	drive()
	{
		return 'vroom';
	}
}
let car;
beforeEach(() => {
	car = new Car();
});

describe('Car', () =>
{
	it('Can park', () =>
	{
		//const car = new Car(); (If we do not add the before each function)
		assert.equal(car.park(),'stopped');
	});

	it('Can drive', () =>{
		//const car = new Car(); (If we do not add the before each function)
		assert.equal(car.drive(),'vroom');
	});

});

