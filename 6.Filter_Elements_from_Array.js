var filter = function (arr, fn){
    let result = []

    for( i = 0 ; i < arr.length ; i++){
        if(fn(arr[i], i)){
            result.push(arr[i])
        }
    }
    return result

}

console.log(filter([0,10,20,30], function greaterThan10(n){ return n > 10}))
console.log(filter([0,10,20,30], function plusOne(n, i){ return i == 0}))
console.log(filter([-2,-1,0,1,2], function plusOne(n) {return  n + 1}))