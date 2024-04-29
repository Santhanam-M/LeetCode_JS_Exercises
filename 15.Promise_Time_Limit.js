var timeLimit = function(fn, t){

    return async function(...args){
        const timeOut = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject('Time Limit Exceeded')
            }, t)
        })

        const fnPromise = fn(...args)

        return Promise.race([timeOut, fnPromise])
    }
}

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
console.log(limited(150).catch(console.log)) // "Time Limit Exceeded" at t=
const args = [5]
