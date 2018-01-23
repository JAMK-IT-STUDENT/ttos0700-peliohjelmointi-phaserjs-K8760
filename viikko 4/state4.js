demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#F2BA38';
        console.log('state4');
        addChangesStateEventListeners();
    },
    update: function(){}
}