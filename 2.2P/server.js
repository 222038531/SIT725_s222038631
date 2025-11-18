var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended : false}));

var port = process.env.port || 3000;

let numbers = []

app.get('/square', (req, res) => {
    const num = parseFloat(req.query.num);

    if (isNaN(num)) {
        return res.send("Error: Please provide a valid number using query parameter 'num'.");
    }
    const square = num * num;
    numbers.push(square)
    res.send(`The square of ${num} is: ${square}`);
});

app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
         return res.send("Error: Please provide a valid number using query parameter 'num'.");
    }

    const add = a + b
    res.send(`A + B =${add}`);
    
});

app.get('/numbers', (req, res) => {
    res.send(`Stored Cal Numbers: ${numbers.join(', ')}`);
});


app.listen(port, ()=>{
    console.log("http://localhost:"+port)
});


