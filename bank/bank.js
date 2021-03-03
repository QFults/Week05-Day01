const fs = require('fs')
const command = process.argv[2]
// Write code to make the following commands work

// node bank.js balance
// -- this command should sum together all amounts on bank.txt and display total
if (command === 'balance') {
  fs.readFile('bank.txt', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    let transactions = data.split(', ')
    let total = 0
    for (let i = 0; i < transactions.length - 1; i++) {
      total += parseFloat(transactions[i])
    }
    total = total.toFixed(2)
    console.log(`Current Balance: $${total}`)
  })
} else if (command === 'lotto') {
  // node bank.js lotto
  // this command should withdraw 0.25 from the bank, run a 50/50 chance (random Math), and either withdraw or add 10 as a result
  let random = Math.random()
  let message = 'You won the lottery! $10 have been added to your account'
  let result = 10
  if (random > 0.5) {
    result = -10
    message = 'You lost the lottery! $10 have been removed from your account'
  }
  fs.appendFile('bank.txt', `-0.25, ${result}, `, err => {
    if (err) { console.log(err) }
    console.log(message)
  })
} else {
  let amount = parseFloat(process.argv[3])
  let message = `$${amount} added to your account`
  if (command === 'withdraw') {
    amount = -amount
    message = `$${-amount} withdrawn from your account`
  }
  fs.appendFile('bank.txt', `${amount}, `, err => {
    if (err) { console.log(err) }
    console.log(message)
  })
  // node bank.js deposit 50
  // -- this command should add the amount to the bank.txt
  
  // node bank.js withdraw 50
  // -- this command should add the negative amount to the bank.txt
}
  
