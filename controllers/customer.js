//npm installed modules
const validator = require("validator")

const dealWithJson = require("./dealWithJson")
const addUser = (userData) =>{
    try{
        if(!userData.name || userData.name.length<3) throw new Error("invalid name")
        // userData.accNum = Date.now()
        const users = dealWithJson.readData()
        let checkAccNum = users.find(e=>e.accNum == userData.accNum)
        if(checkAccNum)  throw new Error("Sorry Account Number is Taken")
        users.push(userData)
        dealWithJson.writeData(users)
        console.log("user Added")    
    }
    catch(e){
        console.log(e.message)
    }
}

const addOp = (userId,op,number)=>{
    const users = dealWithJson.readData()
    let user = users.find(u=> u.accNum == userId)
    if(user == -1) return console.log('User Not Found');
    if(op == "withdrow") {
        if(number >= 6000) return console.log('You Not withdrow Alot Of 6000 EGP')
       else if(user.rBalance < number ) return console.log('Error You Not Have Money')
        else {
            user.rBalance -= number
            let userOp = user.op
            userOp.push({type:"Withdrow",value:number,theDate:(new Date()).toUTCString()})
        }
     }
     else if(op == "add") {
        user.rBalance += number 
        let userOp = user.op
        userOp.push({type:"Add",value:number,theDate:(new Date()).toUTCString()})}
        dealWithJson.writeData(users)
        console.log("Operation Success")
}
const showOp = (userId)=> {
    const users = dealWithJson.readData()
    let user = users.find(u=> u.accNum == userId)
    if(!user) return console.log('User Not Found ');
    else {console.log(user.op);}
}
module.exports = { addUser ,addOp, showOp }