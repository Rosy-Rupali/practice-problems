function promiseToCleanRoom(){
    return new Promise(function(resolve, reject){
        const isClean = true;
        if(isClean){
            resolve('Room is clean');
        }else{
            reject('Room is still dirty');
        }
    })
}
promiseToCleanRoom().then(function(fromResolve){
    console.log(fromResolve)
}).catch(function(fromReject){
    console.log(fromReject)
})