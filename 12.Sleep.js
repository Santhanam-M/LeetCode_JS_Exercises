async function sleep(millis) {
    
    const promiseObj = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, millis)
    })

    return promiseObj
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100