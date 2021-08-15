const assert = require('assert');
const ganache = require('ganache');
const web3 = require('web3');
const web3 = new Web3(ganache.provider()); 



beforeEach(() =>{
    //get a list of accounts to deploy
    web3.eth.getAccuounts().then(fetchedAcoounts => {
       console.log(fetchedAcoounts); 
    });
    
    //use one of the accounts to deploy the contract
});

describe('Inbox' , () => {
   it('deploys a contract' , () => {
       
   }); 
});