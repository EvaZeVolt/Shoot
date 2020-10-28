var Player, controller, loop, Blocks, Blocks2, Title, turkey;
var ctx = document.getElementById("canvas").getContext("2d");

ctx.canvas.height = 470;
ctx.canvas.width = 999;
//title

turkey = {
  width: 50,
  height: 50,
  x: 300,
  y: 450
};
Title = {
  height: 50,
  width: 50
};

//Blocks

Blocks = {
  height: 50,
  width: 200,
  x: 700,
  y: 350
};

Blocks2 = {
  height: 50,
  width: 200,
  x: 450,
  y: 250
};
//game

Player = {
  height: 50,
  width: 50,
  x: 500,
  y: 350,
  x_velocity: 0,
  y_velocity: 0
};

controller = {
  left: false,
  right: false,
  up: false,
  keyListener: function (event) {
    var key_state = event.type == "keydown" ? true : false;

    switch (event.keyCode) {
      case 37: // left key
        controller.left = key_state;
        break;
      case 38: // up key
        controller.up = key_state;
        break;
      case 39: // right key
        controller.right = key_state;
        break;
    }
  }
};

loop = function () {
  if (controller.up && Player.jumping == false) {
    Player.y_velocity -= 27;
    Player.jumping = true;
  }

  if (controller.left) {
    Player.x_velocity -= 0.5;
  }

  if (controller.right) {
    Player.x_velocity += 0.5;
  }

  Player.y_velocity += 1.5;
  Player.x += Player.x_velocity;
  Player.y += Player.y_velocity;
  Player.x_velocity *= 0.9;
  Player.y_velocity *= 0.9;

  //right block
  if (Player.y > 300 && Player.y < 303 && Player.x > 660 && Player.x < 900) {
    Player.jumping = false;
    Player.y = 300;
    Player.y_velocity = 0;
  }
  if (Player.y > 360 && Player.y < 450 && Player.x > 660 && Player.x < 900) {
    Player.jumping = false;
    Player.y = 450;
    Player.y_velocity = 0;
  }

  if (Player.y < 320 && Player.y > 300 && Player.x > 670 && Player.x < 900) {
    Player.jumping = false;
    Player.y = 300;
    Player.y_velocity = 0;
  }
  //2block
  if (Player.y > 202 && Player.y < 220 && Player.x > 400 && Player.x < 648) {
    Player.jumping = false;
    Player.y = 202;
    Player.y_velocity = 0;
  }

  if (Player.y > 202 && Player.y < 220 && Player.x > 400 && Player.x < 648) {
    Player.jumping = false;
    Player.y = 350;
  }

  //end
  ctx.fillStyle = "gray";
  ctx.fillRect(400, 200, 200, 200);

  //Floor
  if (Player.y > 450 - 16 - 32) {
    Player.jumping = false;
    Player.y = 450 - 16 - 32;
    Player.y_velocity = 0;
  }
  //left
  if (Player.x > 950) {
    Player.x = 950;
  }
  //right
  if (Player.x < 0) {
    Player.x = 0;
  }

  ctx.fillStyle = "#38A2DF";
  ctx.fillRect(0, 0, 999, 500);
  //end of fllor

  ctx.fillStyle = "#ff0000";
  ctx.beginPath();
  ctx.rect(Player.x, Player.y, Player.width, Player.height);
  ctx.fillStyle = "Red";
  ctx.fill();

  ctx.strokeStyle = "#202830";
  ctx.lineWidth = 100;
  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.lineTo(999, 500);
  ctx.stroke();

//turkey



  //blocks

  ctx.fillStyle = "#363836";
  ctx.stroke();
  ctx.fillRect(Blocks.x, Blocks.y, Blocks.width, Blocks.height);

  ctx.fillStyle = "#363836";
  ctx.fillRect(Blocks2.x, Blocks2.y, Blocks2.width, Blocks2.height);

  window.requestAnimationFrame(loop);

  //text
};

//Images

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
