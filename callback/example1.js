function delay(callback){
    setTimeout(function(){
        console.log("the long delay ends");
        callback("task completed");
    }, 1000);
}
delay(response =>{
    console.log(response)
})
console.log("hello everyone");