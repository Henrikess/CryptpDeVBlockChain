const Block = require('./block')


class Chain {


  constructor() {
    this.instance = [new Block({index: 0, prevHash: 0, data: 'Genesis Block'})]
    this.index = 1
  }

  addBlock(data) {
    const index = this.index
    const prevHash = this.instance[this.index - 1].hash

    const block = new Block({index, prevHash, data})

    this.index++
    this.instance.push(block)
  }

  print() {
    console.log(this.instance)
  }

}

module.exports = Chain