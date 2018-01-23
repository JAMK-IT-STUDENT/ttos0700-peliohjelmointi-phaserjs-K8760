demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#6157F2';
        console.log('state6');
        addChangesStateEventListeners();
    },
    update: function(){}
}