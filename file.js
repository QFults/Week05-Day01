const fs = require('fs')

// fs.readFile('some.txt', 'utf8', (err, text) => {
//   if (err) { console.log(err) }
//   console.log(text)
// })

// fs.readFile('pet.json', 'utf8', (err, data) => {
//   if (err) { console.log(err) }
//   let pet = JSON.parse(data)
//   console.log(pet.name)
// })

// fs.writeFile('some.txt', 'Something Different', err => {
//   if (err) { console.log(err) }
// })

// let pet = {
//   name: 'Bear',
//   age: 6,
//   breed: 'cockapoo'
// }

// fs.writeFile('pet.json', JSON.stringify(pet), err => {
//   if (err) { console.log(err) }
// })

// fs.appendFile('some.txt', 'Another thing', err => {
//   if (err) { console.log(err) }
// })

// let first = process.argv[2]
// let last = process.argv[3]

// let html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1>${first} ${last}</h1>
// </body>
// </html>`

// fs.writeFile('index.html', html, err => {
//   if (err) { console.log(err) }
// })