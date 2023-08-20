//add middlewares and dependencies

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let jokes = [
    {id:1,joke:'This is joke 1'},
    {id:2,joke:'This is joke 2'},
    {id:3,joke:'This is joke 3'},
]

//enabling cors for every request
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("This is the home page");
})

app.get('/jokes',(req,res)=>{
    res.send(jokes);
})

app.get('/randomjoke',(req,res)=>{
    const joke = jokes[Math.floor(Math.random()*jokes.length)];
    res.send(joke);
})

app.post('/jokes',(req,res)=>{
    const newId = jokes[jokes.length-1].id + 1;
    const joke = req.body;
    console.log(joke);

    jokes.push({id:newId, joke:joke});

    res.send({id:newId,joke:joke});
});

app.delete('/jokes/:id',(req,res)=>{
    const jokeId = req.params.id;

    const jokeIndex = jokes.findIndex(joke => joke.id == jokeId);
    jokes.splice(jokeIndex,1);
    res.send({message:"The joke was deleted successfully"});

});

app.listen(port,()=>{
    console.log("Joke API is listening on port ",port)
})