var once = function(fn){

    let executed = false

    return function(...args){
        if(!executed){
            executed = true
            return fn(...args)
        }
        else{
            return undefined
        }
    }
    
}

let fn = function(a, b, c){ return a + b + c}
let onceFn = once(fn)
console.log(onceFn(1,2,3))
console.log(onceFn(1,2,3))