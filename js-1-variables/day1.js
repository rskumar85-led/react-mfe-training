console.log("Hello Tampa!")

const balance = 100
const account = 'account balance'
//balance = 2000 //error because of const
//console.log(typeof balance) //will print the type say number
console.log(account,balance);

let mutuableBalance = 10000
mutuableBalance += 20000
console.log('mutuable balace :',mutuableBalance)

let deposit = prompt('Deposit Amount?')
//mutuableBalance += deposit
//console.log('You have a new balance:', mutuableBalance); //This will concatenate (30000500) as by default prompt function will return a string

mutuableBalance += +deposit //add + infront of the variable or use Number(deposit) to convert string into number
console.log('You have a new balance:', mutuableBalance); //This will print 30500