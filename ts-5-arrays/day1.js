var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var user1_1 = {
        name: 'Santhosh',
        age: 35,
        isLoggedIn: true
    };
    var user2 = {
        name: 'Santhoshkumar Rajan',
        age: 40,
        isLoggedIn: false
    };
    console.log('All Users Object:', user1_1, user2);
    console.log('Age of User1:', user1_1.age);
    var users = [user1_1, user2];
    console.log('Array users:', users);
    console.log('First Entry from Users array:', users[0]);
    console.log('Name from the Second Entry from Users array:', users[1].name);
    for (var i = 0; i < users.length; i++) {
        console.log('Users in Loop', users[i]);
    }
    var user3 = __assign(__assign({}, user1_1), { age: 50 }); //extract the values from user1 and put in user3, also modify age
    var name_1 = user3.name, isLoggedIn = user3.isLoggedIn, age = user3.age; //extract name and isloggedin from user3
    console.log('user3 object:', user3);
    console.log('---->', name_1, isLoggedIn, age);
    //FUNCTIONS
    function sayHello() {
        console.log('Hello');
    }
    //without function keyword
    var sayHello_1 = function () {
        console.log('Hello');
    };
    var changeLoginStatus = function () {
        var userName = user1_1.isLoggedIn ? user1_1.name : 'User not logged in';
        var userNameInPara = "Welcome! <p>".concat(userName, "</p>");
        var userDiv = document.getElementById("user");
        userDiv.innerHTML = userName;
    };
    var trans1 = {
        description: 'Deposit',
        amount: 1000,
        date: new Date()
    };
    var trans2 = {
        description: 'Withdrawl',
        amount: 500,
        date: new Date()
    };
    var transactionsArray_1 = [trans1, trans2];
    var newTransaction = function () {
        var descriptionInput = document.getElementById('description').value;
        var amountInput = document.getElementById('amount').value;
        var trans3 = {
            description: descriptionInput,
            amount: Number(amountInput),
            date: new Date()
        };
        transactionsArray_1.push(trans3);
        console.log('New Transaction Added to the Array:', transactionsArray_1);
    };
}
