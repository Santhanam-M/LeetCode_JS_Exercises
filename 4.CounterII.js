var createCounter = function(init){
    let result = init

    return {
        increment : function(){
            result++
            return result
        },
        decrement : function(){
            result--
            return result
        },
        reset : function(){
            result = init
            return result
        }
    }

}

const counter = createCounter(30)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())