demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#F257F2';
        console.log('state7');
        addChangesStateEventListeners();
    },
    update: function(){}
}