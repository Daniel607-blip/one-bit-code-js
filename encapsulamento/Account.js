class Account{
    #password
    #balance = 0
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password){
        if(this.#authenticate(email,password)){
            return this.#balance
        }else{
            return null
        }
    }

    #authenticate(email, password){
        return this.email === email && this.#password === password
    }

}

const user = {
    email: "Isaac@email.com",
    password: "123456"
}



delete user.email
console.log(myAccount.getBalance("Isaac@email.com" , "123456"))

