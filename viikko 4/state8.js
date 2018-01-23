demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#3D8029';
        console.log('state8');
        addChangesStateEventListeners();
    },
    update: function(){}
}