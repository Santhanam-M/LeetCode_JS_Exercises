var reduce = function(nums, fn, init){
    let result = init

    for(i = 0 ; i < nums.length ; i ++){
        result = fn(result, nums[i])
    }
    return result
}

console.log(reduce([1,2,3,4], function sum(accum, curr){ return accum + curr}, 0))
console.log(reduce([1,2,3,4], function sum(accum, curr){ return accum + curr * curr}, 100))
console.log(reduce([], function sum(accum, curr){ return 0}, 25))
