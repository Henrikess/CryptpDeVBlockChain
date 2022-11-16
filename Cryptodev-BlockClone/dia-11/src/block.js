const crypto = require('crypto-js')

class Block {

  constructor({index, previousHash, data}) {
    this.index = index
    this.previousHash = previousHash
    this.data = data
    this.timestamp = new Date().getTime()
    this.nounce = 0
    this.hash = '' //this.generateHash(this.index, this.previousHash, this.timestamp, this.data, this.nounce)
  }

  generateHash(index, previousHash, timestamp, data, nounce) {
    const hash = crypto.SHA256(index + previousHash + timestamp + JSON.stringify(data) + nounce).toString()
    return hash
  }

  mine(difficult) {

    const zeros = Array(difficult+1).join('0') //ex dif--5 = 00000
    let inicio = Date.now();
    let incorretosHashs = 0
    let nounceLuck = 7777777777777
    while(this.hash.substring(0, difficult) !== zeros ){
      incorretosHashs++
      this.nounce = Math.floor(Math.random() * nounceLuck);
      this.hash = this.generateHash(this.index, this.previousHash, this.timestamp, this.data, this.nounce)
    }
    let duracao = Date.now() - inicio;
    console.log(`Block mined, nounce:  ${this.nounce}`)
    console.log(`hash: ${this.hash}`)
    console.log(`Tempo: ${duracao/1000 < 60 ? duracao/1000 + " segundos": parseInt(duracao/60000) + " minutos e " + parseInt((duracao/1000) % 60 ) + " segundos"}`)
    console.log(`Hashs gerados até o resultado: ${incorretosHashs}`)
    return true

  }

}
module.exports = Block