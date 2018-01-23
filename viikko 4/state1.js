demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#21F4FB';
        console.log('state1');
        addChangesStateEventListeners();
    },
    update: function(){}
}