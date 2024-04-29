var cancellable = function(fn, args, t) {

    fn(...args)

    const intervalFn = setInterval(() => {
        fn(...args)
    }, t);

    const cancelFn = function(){
        clearInterval(intervalFn)
    }

    return cancelFn


};

const fn = (x) => x * 2
const args = [4], t = 35, cancelTimeMs = 190;   
console.log(cancellable(fn, args, t))