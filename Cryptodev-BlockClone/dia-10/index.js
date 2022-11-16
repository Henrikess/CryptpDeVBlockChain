const readline = require('readline-sync')
const Chain = require('./src/chain')


//Simulação do uso do Menu
const chain = new Chain()
chain.addBlock({ amount: 33 }) //Posicao 1
chain.addBlock({ amount: 10 }) //Posicao index 2
chain.addBlock({ amount: 44, message: 'BTC > All' }) //Posicao Index 3

//Hackerman
//chain.instance[1].data.amount = 9001
//chain.instance[1].hash = '579e6e623c3e1d099c2b8c93c929b6c14432fa9daa87e4a699b11571d3071278'


function main() {
  clear()
  let op
  
  do{
    console.log('Welcome to my CryptoDevChain !\n\n')
    op = readline.questionInt('1. Add a new block\n2. Print the chain\n0. Exit\n')
    clear()
    switch(op) {
      case 1:
        const amount = readline.questionInt('Amount: ')
        const message = readline.question('Message: ')

        chain.addBlock({ amount, message }) //Cria um novo bloco e adiciona na cadeia

        console.log('Block added!')
        clear(true)
        break;
      case 2:
        console.log('Blocks List!')
        chain.print() //Lista cadeia de blocos a partir da instancia
        validateChain ()
        clear(true)
        break;
      case 0:
        console.info("Bye!")
        break;
      default:
        console.error("Invalid option")
        clear()
        break;
    }

  } while(op !== 0)
}

function clear(pressAnyKey) {
  if(pressAnyKey)
    readline.keyIn('Press any key to continue...')
  console.clear()
}
function validateChain (){
      //console.log(chain.instance[1].data)
      let i = 0
      while( i < chain.index-1){
        //Comparando os hashs
        //console.log("Bloco : "+ chain.instance[i+1].index + " Hash : " + chain.instance[i+1].hash + " Previous Hash : " + chain.instance[i + 1].prevHash)
        if(chain.instance[i+1].prevHash != chain.instance[i].hash || chain.instance[i+1].hash == undefined) {
          console.log("Hash inválido no bloco", chain.instance[i].index)
          chain.instance[i].data.amount = 0
          chain.instance[i].message = 'Este bloco foi verificado como inválido! A transação foi anulada e os valores foram perdidos.'   
        
      } 
      i++;
      }
}

main()