const rocks = who => {
    console.log(who + " rocks");
}

// setTimeout(rocks,2000,'Abhishek');

const hello = delay => {
    console.log("Hello in " + delay + " seconds");
}

// setTimeout(hello,4000,4);
// setTimeout(hello,6000,6);

const timerId = setTimeout(() => {
    console.log("This will never print");
}, 0);

clearTimeout(timerId);

// set Interval
setInterval(() => {
    console.log("Will print after every 2 seconds");
}, 2000);

//print going right only 5 times and after that done
counter = 0;
const intervalID = setInterval(() => {
    counter++;
    if (counter === 6) {
        console.log("done exiting now");
        clearInterval(intervalID);
    } else {
        console.log("Going right")
    }

}, 2000);