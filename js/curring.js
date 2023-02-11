
function curry(fn) {
    var fnArgs = fn.length
    
    console.log(fnArgs, ": ===:fnArgs") 
    return function f1(...args) {
        console.log(args, ": ===:args")
        if(args.length >= fnArgs) {
            console.log('enough arguments')
            return fn(...args)
        } else {
            console.log("not enough arguments")
            return  function f2(...moreArgs){
                const ars = [...args, ...moreArgs]
                return  f1(...ars)
            }
        }
    }
}


const curriedSum = curry ((a, b, c) => a + b + c)
const level1 = curriedSum(1)
const level2 = level1(2)
const level3 = level2(3)
console.log(level3, ": ===:level3") 



// use case 

const get = curry((obj, prop) => obj[prop])

const user = {
    name: 'mike',
    age: 22,
    role: "front-end"
}
