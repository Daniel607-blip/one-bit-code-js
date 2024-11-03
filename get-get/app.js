class wallet{
    #amount 
    #username
    constructor(){
        this.#amount = 100.99 * 100
    }

    get amount(){
        return this.#amount / 100
    }

    set username(newUserName){
        if(typeof newUserName === 'string'){
            this.#username = newUserName
        }else{
            console.log('username must be of type string')
        }
        
    } 

    get username(){
        return this.#username
    }
}

const myWallet = new wallet()

console.log(myWallet.amount)

myWallet.username = "Daniel"
myWallet.username = myWallet.username += " Souza"

console.log(myWallet.username)



