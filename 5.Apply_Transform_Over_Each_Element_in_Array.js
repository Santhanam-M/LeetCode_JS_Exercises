var map = function(arr, fn){
    const result = []
    for(i = 0 ; i < arr.length ; i ++){
        result.push(fn(arr[i], i))
    }
    return result

}

console.log(map([1,2,3], function plusone(n) { return n + 1; }))
console.log(map([5,2,3], function plusI(n, i) { return n + i; }))
console.log(map([42,42,42], function constant() { return 42; }))
