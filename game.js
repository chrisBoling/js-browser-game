var player;




function draw() {
    var canvas = document.getElementById('window');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
    }
};

function spawn() {
    
}

function gameObject (width, height, color, x, y, type) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.type = type;
    
    
    
}


var gameWindow = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.context = this.canvas.getContext('2d');
        var container = document.getElementById('gameArea');
        container.insertBefore(this.canvas, container.firstChild);
     //   this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
document.addEventListener('DOMContentLoaded', function(event) { 
            gameWindow.start();
});

