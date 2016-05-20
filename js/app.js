// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // this.sprite = 'images/enemy-bug.png';
this.sprite = new Image();
this.sprite.src = 'images/enemy-bug.png';
this.x = 1;
this.y = Math.floor((Math.random() * 3) + 1) * 83;
this.speed = Math.floor((Math.random() * 8) + 1);
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    var moveMent = this.x;
    this.x = moveMent + (30 * dt * this.speed);
    console.log(player.x);
    if (this.x > 505) {
        this.x = 0;
        this.speed = Math.floor((Math.random() * 8) + 1);
        this.y = Math.floor((Math.random() * 3) + 1) * 83;
    }
    if (player.x - this.x < 55 && player.x - this.x > -25) {
        if (player.y - this.y < 5 && player.y - this.y > -5) {
            player.x = 210;
            player.y = 415;
            player.update();
        }
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

//Test
Enemy.update = function(dt) {
    var moveMent = this.x;
    this.x = moveMent + (30 * dt * this.speed);
    console.log(player.x);
    if (this.x > 505) {
        this.x = 0;
        this.speed = Math.floor((Math.random() * 8) + 1);
        this.y = Math.floor((Math.random() * 3) + 1) * 83;
    }
    if (player.x - this.x < 55 && player.x - this.x > -25) {
        if (player.y - this.y < 5 && player.y - this.y > -5) {
            console.log("Hit", player.y, this.y);
            player.x = 210;
            player.y = 415;
            player.update();
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(this.sprite, this.x, this.y);
};

//Not using prototype
Enemy.render = function() {
    ctx.drawImage(this.sprite, this.x, this.y);
};

// Now write your own player class CHECK
// This class requires an update(), render() and 
// a handleInput() method. CHECK

var Player = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};

// Update the players's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    ctx.drawImage(this.sprite, this.x, this.y);
};

//Writing not using prototype cc
Player.update = function() {
    ctx.drawImage(this.sprite, this.x, this.y);
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    // console.log(this.x);
    // console.log(this.y);
    // console.log(this.sprite);
    // console.log(this);
    ctx.drawImage(this.sprite, this.x, this.y);
};
//Writing not using prototype cc
Player.render = function() {
    // console.log(this.x);
    // console.log(this.y);
    // console.log(this.sprite);
    // console.log(this);
    ctx.drawImage(this.sprite, this.x, this.y);
};




// cc For handling key stroke input.
Player.prototype.handleInput = function(arrow) {
    var lat = this.y
    var loung = this.x
    if (arrow === "up") {
        this.y = lat - 83;
    }
    if (arrow === "down" && this.y < 400) {
        this.y = lat + 83;
    }
    if (arrow === "left" && this.x > 101) {
        this.x = loung - 101;
    }
    if (arrow === "right" && this.x < 400) {
        this.x = loung + 101;
    }
    if (lat < 84) {
        this.x = 210;
        this.y = 415;
    }
};
// Writing handleInput without prototype cc
Player.handleInput = function(arrow) {
    var lat = this.y
    var loung = this.x
    if (arrow === "up") {
        this.y = lat - 83;
    }
    if (arrow === "down" && this.y < 400) {
        this.y = lat + 83;
    }
    if (arrow === "left" && this.x > 101) {
        this.x = loung - 101;
    }
    if (arrow === "right" && this.x < 400) {
        this.x = loung + 101;
    }
    if (lat < 84) {
        this.x = 210;
        this.y = 415;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();

var allEnemies = [enemy1, enemy2, enemy3];

var player = Object.create(Player);
player.x = 210;
player.y = 415;
player.sprite = new Image();
player.sprite.src = 'images/char-princess-girl.png';


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    console.log(allowedKeys[e.keyCode]);
    player.handleInput(allowedKeys[e.keyCode]);
});