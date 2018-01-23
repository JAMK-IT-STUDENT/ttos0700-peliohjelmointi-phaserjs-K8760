demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor= '#E621FB';
        addChangesStateEventListeners();
    },
    update: function(){}
}