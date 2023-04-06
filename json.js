myobj = {
    "squirrel": false,
    "events" : ["work","touched tree","running"]
}
myobj = JSON.stringify(myobj);
console.log(JSON.parse(myobj).squirrel);
console.log(JSON.parse(myobj).events);