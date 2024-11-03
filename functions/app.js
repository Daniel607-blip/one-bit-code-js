function myFunction(){
    console.log(arguments)
    console.log("Quantos argumentos:" , arguments.length)

    for(let i = 0; i < arguments.length; i++){
        console.log("Frutas" , i + 1, ":", arguments[i])
    }
}

myFunction("apple" , "banana","strawberry")

function sum(){
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3
}
sum()
