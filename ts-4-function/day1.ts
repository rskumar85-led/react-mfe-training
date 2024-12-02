{
    type User = {
        name: string,
        age: number,
        isLoggedIn: boolean
    }

    const user1: User = {
        name: 'Santhosh',
        age: 35,
        isLoggedIn:true
    }

    const user2: User= {
        name: 'Santhoshkumar Rajan',
        age: 40,
        isLoggedIn: false
    }

    console.log('All Users Object:',user1, user2);
    console.log('Age of User1:', user1.age);
    
    const users:User[]=[user1, user2]
    console.log('Array users:', users);
    console.log('First Entry from Users array:', users[0]);
    console.log('Name from the Second Entry from Users array:', users[1].name);

    for(let i =0; i< users.length; i++){
        console.log('Users in Loop', users[i]);
        
    }


    const user3: User = {...user1, age:50} //extract the values from user1 and put in user3, also modify age
    const{name, isLoggedIn, age} = user3 //extract name and isloggedin from user3
    console.log('user3 object:', user3);
    console.log('---->',name, isLoggedIn, age);
    
    


    
    
    
    //FUNCTIONS

    function sayHello(): void {
        console.log('Hello');
        
    }

    //without function keyword
    const sayHello = ():void => {
        console.log('Hello');
    }


    const changeLoginStatus = ():void => {
        const userName:string = user1.isLoggedIn ? user1.name: 'User not logged in'
        const userNameInPara = `Welcome! <p>${userName}</p>`
    
        const userDiv:HTMLDivElement = document.getElementById("user") as HTMLDivElement
        userDiv.innerHTML = userName
    }


}