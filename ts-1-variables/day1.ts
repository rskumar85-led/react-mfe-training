{
console.log("Hello Tampa!")

const balance = 100
const account = 'account balance'
//balance = 2000 //error because of const
//console.log(typeof balance) //will print the type say number
console.log(account,balance);

let mutuableBalance = 10000
mutuableBalance += 40000
console.log('mutuable balace :',mutuableBalance)

let deposit: string | null = 500//prompt('Deposit Amount?')
//mutuableBalance += deposit
//console.log('You have a new balance:', mutuableBalance); //This will concatenate (30000500) as by default prompt function will return a string

mutuableBalance += Number(deposit) //add + infront of the variable or use Number(deposit) to convert string into number
console.log('You have a new balance:', mutuableBalance); //This will print 30500


// Sample Exercise #1
let rating:number = 4.5
let studentName:string = 'Santhosh'
let isEligible:boolean = true

console.log('Rating:', rating)
console.log('Type of Rating:', typeof rating);

console.log('studentName:', studentName)
console.log('Type of studentName:', typeof studentName);


console.log('isEligible:',isEligible);
console.log('Type of isEligible:', typeof isEligible);

// Sample Exercise #2
let greeting: string = 'hello'
let name: string | null = prompt("Type your name?")
console.log('Greeting user:', greeting, name)
console.log(`${greeting} ${name}.. Welcome`)



}