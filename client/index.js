const address = '0x57941C4837DEa39692442334ec2d04C02059e5f6';
const abi =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_referredBy",
				"type": "address"
			}
		],
		"name": "buy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "buyTheProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "exit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethereumReinvested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensMinted",
				"type": "uint256"
			}
		],
		"name": "onReinvestment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "incomingEthereum",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "referredBy",
				"type": "address"
			}
		],
		"name": "onTokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethereumEarned",
				"type": "uint256"
			}
		],
		"name": "onTokenSell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethereumWithdrawn",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_toAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountOfTokens_",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokensToSell",
				"type": "uint256"
			}
		],
		"name": "calculateEthereumReceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ethereumToSpend",
				"type": "uint256"
			}
		],
		"name": "calculateTokensReceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dividendsOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_includeReferralBonus",
				"type": "bool"
			}
		],
		"name": "myDividends",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "myTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "onlyAmbassadors",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "referralBalance_",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sellPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingRequirement",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalEthereumBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
let ethPrice;
fetch('https://api.coingecko.com/api/v3/coins/ethereum').then(result => {
	result.json().then(data => {
		ethPrice = data.market_data.current_price.usd;
	})
});

let web3;
let token;

const initWeb3 = () => {
  return new Promise((resolve, reject) => {
    if(typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      window.ethereum.enable()
        .then(() => {
          resolve(
            new Web3(window.ethereum)
          );
        })
        .catch(e => {
          reject(e);
        });
      return;
    }
    if(typeof window.web3 !== 'undefined') {
      return resolve(
        new Web3(window.web3.currentProvider)
      );
    }
    resolve(new Web3('http://localhost:9545'));
  });
};

const initContract = () => {
  return new web3.eth.Contract(abi, address);
};

const initApp = () => {
  let accounts = [];
  const address = document.getElementById('address');
  web3.eth.getAccounts()
  .then(_accounts => {
  accounts = _accounts;
  console.log(accounts);
  
  const $clientsCapital = document.getElementById('clientsCapital');
  const $capital = document.getElementById('capital');
  token.methods.totalEthereumBalance().call().then( result =>{
	$clientsCapital.innerHTML = Math.round(((result/1e18) * ethPrice) * 100) /100;
	$capital.innerHTML = Math.round((result/1e18) * 1e6) /1e6;
  });
  const $creditsValue = document.getElementById('creditsValue');
  const $creditsUsd = document.getElementById('creditsUsd');
  const $dividendEth = document.getElementById('dividendEth');
  const $dividend = document.getElementById('dividend');
  token.methods.dividendsOf(accounts[0]).call().then( result =>{
    console.log(result);
	$dividendEth.innerHTML = Math.round((result/1000000000000000000)* 1000) /1000;
	$dividend.innerHTML = Math.round(((result/1e18) * ethPrice) * 100) /100;
  });
  const $refEth = document.getElementById('refEth');
  const $earning = document.getElementById('earning');
   token.methods.referralBalance_(accounts[0]).call().then( result =>{
     $refEth.innerHTML = Math.round((result/1000000000000000000)* 1000) /1000;
     $earning.innerHTML = Math.round(((result/1e18) * ethPrice) * 100) /100;
   });
   const $buyEth = document.getElementById('buyPriceEth');
   const $buyUsd = document.getElementById('buyPriceUsd');
  token.methods.buyPrice().call().then( result =>{
    $buyEth.innerHTML = Math.round((result/1000000000000000000) * 1e6) / 1e6;
    $buyUsd.innerHTML = Math.round(((result/1000000000000000000) * ethPrice) * 1e3) / 1e3;
  });
  const $buyInput = document.getElementById('buyInput').value;
  const $buyToken = document.getElementById('buyToken');
  $buyToken.addEventListener('click', e => {
    const $buyInput = document.getElementById('buyInput').value;
    e.preventDefault();
    token.methods.buy('0x0000000000000000000000000000000000000000')
    .send({from: accounts[0], value: $buyInput * 1000000000000000000})
    .then(result_ => {
		console.log(result_);
		location.reload();
	});

  })
  const $sellEth = document.getElementById('sellPriceEth');
  const $sellUsd = document.getElementById('sellPriceUsd');
  token.methods.sellPrice().call().then( result =>{
	$sellEth.innerHTML = Math.round((result/1000000000000000000) * 1e6) / 1e6;
	$sellUsd.innerHTML = Math.round(((result/1000000000000000000) * ethPrice) * 1e3) / 1e3;

  });
  const $sellToken = document.getElementById('sellToken');
  $sellToken.addEventListener('click', e => {
    e.preventDefault();
    const $sellInput = document.getElementById('sellInput').value;
    token.methods.sell($sellInput)
    .send({from: accounts[0]})
    .then(result_=> {
		console.log(result_);
		location.reload();
	});
    
  })
  token.methods.balanceOf(accounts[0]).call().then(result=>{
    console.log(result);
	$creditsValue.innerHTML = result;
	token.methods.calculateEthereumReceived(result).call().then(ether => {
		$creditsUsd.innerHTML = Math.round(((ether/1e18) * ethPrice) * 100) /100;
	})
	
  });
  let result_;
  const $totalDividend = document.getElementById('totalDividend');
  const $dividendUsd = document.getElementById('dividendUsd');
  token.methods.referralBalance_(accounts[0]).call().then(result => {
	  result_ = result;
	  token.methods.dividendsOf(accounts[0]).call().then(data => {
		  console.log(data/1e18);
		  console.log(result_);
		  $totalDividend.innerHTML = Math.round((data/1e18 + result_/ 1e18) * 1e6) /1e6;
		  $dividendUsd.innerHTML = Math.round(((data/1e18 + result/1e18)* ethPrice) * 1e6) /1e6;

	  })
  })

  const $withdraw = document.getElementById('withdraw');
  const $reinvest = document.getElementById('reinvest');
  $withdraw.addEventListener('click', e => {
    token.methods.withdraw().send({from: accounts[0]})
    .then(result => {
	  console.log(result);
	  location.reload();
	});
})
  $reinvest.addEventListener('click', e => {
	  e.preventDefault();
	  token.methods.reinvest().send({from: accounts[0]})
	  .then(result => {
		location.reload().then(
			console.log(result)
		)

	  })
  })
    
  console.log(accounts[0])
})
};

document.addEventListener('DOMContentLoaded', () => {
  initWeb3()
    .then(_web3 => {
      web3 = _web3;
      token = initContract();
      initApp(); 
    })
    .catch(e => console.log(e.message));
});