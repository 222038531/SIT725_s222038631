const cardList = [
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

]

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
            '</div><div class="card-content">'+
            '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
            '<div class="card-reveal">'+
            '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
            '<p class="card-text grey-text">'+item.desciption+'</p>'+
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});

