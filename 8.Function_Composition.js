var compose = function(functions){
    
    return function(x){
        let result = x
        for(i = functions.length - 1 ; i >= 0 ; i--){
            result = functions[i](result)
        }
        return result
    }
}

const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x])
console.log(fn(1))