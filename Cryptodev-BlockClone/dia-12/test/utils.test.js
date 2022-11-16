const { assert, expect } = require('chai')
const { hashGenerator} = require('../src/utils')


describe('Hash Generator Utils Testing Pipeline', () => {
  let indexTest = 1
  let hashTest = '0949ffc44f8c41b49340fd68a40a3902a4f61e3b328eefec022b30217f6f7d74'
  let dataTest = ['data', 100, 'uma mensagem']
  let timestampTest = new Date().getTime()
  let nounceTest = 0

  it('should be cypher with SHA-256 from a list', () => {
    array = [
      indexTest,
      hashTest, 
      dataTest, 
      timestampTest,
      nounceTest
    ]

    cypher = hashGenerator(array)
    expect(cypher.length).to.equals(64) 

  })

  it('should be cypher with a SHA-256 from parameters', () => {
    
    expect(hashGenerator(indexTest,hashTest,dataTest,timestampTest,nounceTest).length).to.equals(64) 
 
  })
})
