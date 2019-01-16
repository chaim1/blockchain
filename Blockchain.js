const sha256 = require('sha256');

function Blockchian() {
    this.chain = [];
    this.pendingTransactions = [];
};


Blockchian.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };
    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
};


Blockchian.prototype.getLastBlock = function(){
    return this.chain[this.chain.length -1]
};

Blockchian.prototype.createNewTransaction = function( amount, sender, recipient){
    const newTransaction = {
        amount:  amount,
        sender: sender,
        recipient: recipient
    };
    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock()['index'] + 1;
};

Blockchian.prototype.hashBlock = function( previousBlockHash, cuurentBlockData, nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(cuurentBlockData);
    const hash = sha256(dataAsString);
    return hash;
};

Blockchian.prototype.pruupOfWork = function ( previousBlockHash, cuurentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock( previousBlockHash, cuurentBlockData, nonce  );
    while(hash.substring( 0, 4 ) !== '0000'){
        nonce++;
        hash = this.hashBlock( previousBlockHash, cuurentBlockData, nonce );
        console.log(hash);        
    }
    return nonce;
}


module.exports = Blockchian;

