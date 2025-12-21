var express = require("express")
var app = express()


var port = process.env.port || 3000;

const mongoose = require('mongoose');

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended : false}));

db = mongoose.connect('mongodb://localhost:27017/myprojectDB', {
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    desciption: String,
});


const Project = mongoose.model('Project', ProjectSchema);



const recipesData = [ 
    {
        title: "Cherry Pie",
        image: "images/pie.jpg",
        link: "How to Cook Cherry Pie",
        desciption: `600g frozen pitted cherries
        1 tbsp lemon juice
        1/2 tsp ground cinnamon
        1/3 cup raw sugar
        2 tbsp cornflour
        1 egg white, lightly beaten
        Vanilla ice-cream, to serve
        Pastry
        1 1/3 cups plain flour
        1/2 cup self-raising flour
        1/4 cup custard powder
        1/4 cup caster sugar
        150g butter, chilled, chopped
        1 egg
        2 tbsp iced water`
    },
    {
        title: "Chocholate Cake",
        image: "images/cake.jpg",
        link: "How to Bake Chocolate Cake",
        desciption: `1 3/4 cups plain / all purpose flour
        3/4 cup cocoa powder  unsweetened (Note 2)
        1 1/2 tsp baking powder
        1 1/2 tsp baking soda (bi-carb soda)
        2 cups white sugar (Note 1)
        1 tsp salt
        2 eggs (~55-65g / 2 oz each)
        1 cup milk (low or full fat)
        1/2 cup vegetable oil (or canola)
        2 tsp vanilla extract
        1 cup boiling water`
    },
    {
        title: "Steak",
        image: "images/steak.jpg",
        link: "How to Cook Steak",
        desciption: `2 boneless ribeye or scotch fillet , 2.5 cm / 1″ thick, approx 300g/10 oz each 
        1 tbsp vegetable oil
        Salt and pepper
        75g / 5 tbsp unsalted butter , cut into 1.25cm / 1/2″ cubes 
        6 sprigs fresh thyme or 3 sprigs rosemary
        5 garlic cloves , peeled and smashed to split`
    }
];

Project.insertMany(recipesData)
  .then(() => {
    console.log("Sample data inserted");
  })
  .catch(err => console.error(err));

var port = process.env.port || 3000;

app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
});

app.listen(port, ()=>{
    console.log("http://localhost:"+port)
});


