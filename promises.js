const ticket = new Promise(function (resolve,reject){
    const isBoarded = false;
    if(isBoarded){
        resolve('You are ready to go');
    }else{
        reject('You are not ready to go');
    }
})

ticket.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
})