const user = require("./controllers/customer")
const yargs = require("yargs")

yargs.command({
    command:"addUser",
    describe:"used for adding users",
    builder:{
        name:{
            type:String,
            required:true
        },
        iBalance:{
            type:Number,
            required:true
        },
        rBalance:{
            type:Number,
            required:true
        }
       
    },
    handler:function(argv){
        let userData = {
            accNum:Date.now(),
            name:argv.name,
            iBalance:argv.iBalance,
            rBalance:argv.rBalance,
            op:[]
        }
        user.addUser(userData)
    }
})

yargs.command({
    command:"addOp",
    describe:"Used For Add Operations",
    builder:{
        id:{
            type:Number,
            required:true
        },
        op:{
            type:String,
            required:true
        },
        number:{
            type:Number,
            required:true
        }
    },
    handler:function(argv){
        user.addOp(argv.id,argv.op,argv.number)
    }
})

yargs.command({
    command:"showOp",
    describe:"used for Show Oprations",
    builder:{
        id:{
            type:Number,
            required:true
        }
    },
    handler:function(argv){
        user.showOp(argv.id)
    }
})

yargs.argv