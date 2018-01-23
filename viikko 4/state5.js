demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#85F257';
        console.log('state5');
        addChangesStateEventListeners();
    },
    update: function(){}
}