import React from 'react';

class BlockChain {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: BlockChain = new BlockChain(0, "202020", "", "Hello", 123456);

let blockchain: [BlockChain] = [genesisBlock];

console.log(blockchain)

const Block = () => {
    return (
        <div>

        </div>
    );
};

export default Block;