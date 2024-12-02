{
    console.log("Hello Tampa!");
    var balance = 100;
    var account = 'account balance';
    //balance = 2000 //error because of const
    //console.log(typeof balance) //will print the type say number
    console.log(account, balance);
    var mutuableBalance = 10000;
    mutuableBalance += 40000;
    console.log('mutuable balace :', mutuableBalance);
    var deposit = 500; //prompt('Deposit Amount?')
    //mutuableBalance += deposit
    //console.log('You have a new balance:', mutuableBalance); //This will concatenate (30000500) as by default prompt function will return a string
    mutuableBalance += Number(deposit); //add + infront of the variable or use Number(deposit) to convert string into number
    console.log('You have a new balance:', mutuableBalance); //This will print 30500
    // Sample Exercise #1
    var rating = 4.5;
    var studentName = 'Santhosh';
    var isEligible = true;
    console.log('Rating:', rating);
    console.log('Type of Rating:', typeof rating);
    console.log('studentName:', studentName);
    console.log('Type of studentName:', typeof studentName);
    console.log('isEligible:', isEligible);
    console.log('Type of isEligible:', typeof isEligible);
    // Sample Exercise #2
    var greeting = 'hello';
    var name_1 = prompt("Type your name?");
    console.log('Greeting user:', greeting, name_1);
    console.log("".concat(greeting, " ").concat(name_1, ".. Welcome"));
}
