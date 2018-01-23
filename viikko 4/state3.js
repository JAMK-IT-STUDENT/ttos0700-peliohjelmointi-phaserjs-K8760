demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#F2385D';
        console.log('state3');
        addChangesStateEventListeners();
    },
    update: function(){}
}