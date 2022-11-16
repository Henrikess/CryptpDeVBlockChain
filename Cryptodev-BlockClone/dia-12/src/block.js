const utils = require('./utils')

class Block {

  constructor({index, previousHash, data = []}) {
    this.index = index
    this.previousHash = previousHash
    this.data = data
    this.timestamp = new Date().getTime()
    this.nounce = 0
    this.hash = ''
  }

  compute() {
    return utils.hashGenerator(
        this.index, 
        this.previousHash, 
        this.timestamp,
        JSON.stringify(this.data),
        this.nounce
    )
  }

  mine(difficult) {

    const zeros = Array(difficult+1).join('0')
    let inicio = Date.now();
    let incorretosHashs = 0
    let nounceLuck = Math.pow(16, difficult)
    while(this.hash.substring(0, difficult) !== zeros ){ 
      incorretosHashs++
      this.nounce = Math.random(0, nounceLuck)
      this.hash = this.compute()
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