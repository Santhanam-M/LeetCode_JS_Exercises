var expect = function(val){

    return {
        toBe : function(num){
            if(val === num){
                return true
            }
            else{
                return false
            }
        },
        notToBe : function(num){
            if(val !== num){
                return true
            }
            else{
                return false
            }
        }
    }
}

console.log(expect(5).toBe(10)); // true
console.log(expect(5).notToBe(10)); // throws "Equal"