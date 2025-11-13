const backpack = {
    name: "Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
        left:26,
        right:26,
    },
    lidOpen: false,
    toggleLid: function(lidStatus){
        this.lidOpen = lidStatus;
    },
    newSTrapLength:function(lengthLeft, lenghtRight){
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },

}

console.log("Hello World")
