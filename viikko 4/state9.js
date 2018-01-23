demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#E8FA49';
        console.log('state9');
        addChangesStateEventListeners();
    },
    update: function(){}
}