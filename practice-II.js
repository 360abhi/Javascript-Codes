let delay = 0;
setInterval(()=>{
    delay++;
    console.log("Hello world "+ delay);
},Math.max(delay*1000,1000));

