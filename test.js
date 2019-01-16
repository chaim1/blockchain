const Blockchain = require('./Blockchain');

const Bitcoin = new Blockchain();

const previousBlockHash = 'GDF9G9FG98GDFG9867678mbnn68FG8DF98FD0G9DFG';
const cuurentBlockData = [
    {
        amount: 100,
        sender: '0000008543H5JKJG45KBKL904JK245',
        recipient: '====HGHFG9GDFGH4J54J5K9FGhjhjhj8S98KFGSD'
    },{
        amount: 20,
        sender: '0000FSG78FV878GH87987987GH878HG8DGH',
        recipient: '000GSFG78FSG7768768844H4H4HG'
    },{
        amount: 15,
        sender: '87F:kjhuhj?8DS6GHI435435KKEW',
        recipient: '00IV86DbS8D6G8FGJ4837TIVGFS78GFGjjh?'
    }
];

console.log(Bitcoin.pruupOfWork(previousBlockHash, cuurentBlockData));
