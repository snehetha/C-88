var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
         player_object.scaleToHeight(140); 
        player_object.set({ 
            top:player_y, left:player_x 
        });
        canvas.add(player_object)
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
       block_image_object = Img;
       block_image_object.scaleToWidth(block_image_width);
       block_image_object.scaleToHeight(block_image_height); 
       block_image_object.set({ 
            top:player_y, left:player_x 
        });
        canvas.add(block_image_object)
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=='80')
    {
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
         document.getElementById("Current_width").innerHTML=block_image_width;
         document.getElementById("Current_height").innerHTML=block_image_height;
         console.log("p&shift pressed");
    }
    if(e.shiftKey==true&&keyPressed=='77')
    {
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
         document.getElementById("Current_width").innerHTML=block_image_width;
         document.getElementById("Current_height").innerHTML=block_image_height;
         console.log("m&shift pressed");
    }
    if(keyPressed=='38'){
        console.log("up key is pressed");
        up();
    }
    if(keyPressed=='40'){
        console.log("down key is pressed");
        down();
    }
    if(keyPressed=='37'){
        console.log("left key is pressed");
        left();
    }
    if(keyPressed=='39'){
        console.log("right key is pressed");
        right();
    }
    if(keyPressed=='87'){
        console.log("w key is pressed");
        new_image('wall.jpg');
    }
    if(keyPressed=='71'){
        console.log("g key is pressed");
        new_image('ground.png');
    }
    if(keyPressed=='76'){
        console.log("l key is pressed");
        new_image('light_green.png');
    }
    if(keyPressed=='84'){
        console.log("t key is pressed");
        new_image('trunk.jpg');
    }
    if(keyPressed=='82'){
        console.log("r key is pressed");
        new_image('roof.jpg');
    }
    if(keyPressed=='89'){
        console.log("y key is pressed");
        new_image('yellow_wall.png');
    }
    if(keyPressed=='68'){
        console.log("d key is pressed");
        new_image('dark_green.png');
    }
    if(keyPressed=='85'){
        console.log("u key is pressed");
        new_image('unique.png');
    }
    if(keyPressed=='67'){
        console.log("c key is pressed");
        new_image('cloud.jpg');
    }
}
function up(){
    if(player_y>=0){
player_y=player_y-block_image_height;
console.log("when up arrow key is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
    }
}

function down(){
    if(player_y<=500){
player_y=player_y+block_image_height;
console.log("when down arrow key is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
    }
}

function left(){
    if(player_x>=0){
player_x=player_x-block_image_width;
console.log("when left arrow key is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
    }
}

function right(){
    if(player_x<=850){
player_x=player_x+block_image_width;
console.log("when right arrow key is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
    }
}

