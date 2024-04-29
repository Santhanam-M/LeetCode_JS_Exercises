var cancellable = function(fn, args, t) {
    const delayFn = setTimeout(()=>{
        fn(...args)
    }, t)

    const cancelFn = ()=>{
        clearTimeout(delayFn)
    }

    setTimeout(cancelFn, t)

    return cancelFn

};
const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;
console.log(cancellable(fn, args, t))
