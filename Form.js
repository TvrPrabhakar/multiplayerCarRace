class Form{
    constructor(){
        

    }
    display(){
        var title=createElement("h2");
        title.html("Multi Player Car Race Game");
        title.position(120,60);
        var input=createInput("name");
        input.position(130,160);
        var button=createButton("Play");
        button.position(250,200);
        var greeting=createElement("h3");
        button.mousePressed(
            function(){
                input.hide();
                button.hide();
                var name = input.value();
                 playerCount=playerCount+1;
                player.update();
                player.updateCount(playerCount);
                greeting.html("Hello "+name);
                greeting.position(130,140);
            }
        )
    }

}