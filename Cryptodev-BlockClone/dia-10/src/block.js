const crypto  = require('crypto-js')

class Block {

    //index (heigth, altura  do bloco)
    // Prev hash (Hash anterior)
    //Timestamp 
    //Data (dados)
    //Hash
    
        constructor({index, prevHash, data}){
            this.index = index
            this.prevHash = prevHash
            this.data = data
            this.timestamp = new Date().getTime() //Data atual em em milesegundos. 
            this.hash = this.generateHash(this.index, this.prevHash, this.timestamp, this.data)
    
        }
        generateHash(index, prevHash, timestamp, data) {
            const hash = crypto.SHA256(index + prevHash + timestamp + data).toString()
            return hash
        }
    }
    
    module.exports = Block