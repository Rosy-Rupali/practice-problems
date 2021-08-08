function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            const err = true;
            if(!err){
                console.log('error is been resolved');
                resolve()
            }else{
                reject('error is not resolved')
            }
        }, 2000)
    })
}
func1().then(function(){
    console.log("thank you for resolving error")
}).catch(function(fromReject){
    console.log(fromReject)
})