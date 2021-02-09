var canvas = document.getElementById("myCanvas");
var audio = document.getElementById("sonido");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 100;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 10;
var brickColumnCount = 6;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}


    
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);



function keyDownHandler(e) {
    if(e.code  == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.code == 'ArrowLeft') {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.code == 'ArrowRight') {
        rightPressed = false;
    }
    else if(e.code == 'ArrowLeft') {
        leftPressed = false;
    }
}
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {

                    audio.src="sonidos/romper.mp3";

                    audio.play();
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("Felicidades! Ha ganado la partida!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawBall() {  //Dibujar pelota
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {  //Dibujar paleta
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#E50490";
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#09F914";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function drawScore()  {  //Dibujar puntuación
    ctx.font = "20px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() { //Dibujar vidas
    ctx.font = "20px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Lives: "+lives, canvas.width-85, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
       //Golpe pared
       
        dx = -dx;
        
    }
    if(y + dy < ballRadius) {
        //Golpe del techo
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            //Golpe en la paleta
            

            audio.src="sonidos/boing.mp3";

            audio.play();
            dy = -dy;
        }
        else {
            //Golpea en la parte inferior
            


            audio.src="sonidos/perder.mp3";
            

            audio.play();
            lives--;
            if(!lives) {
                alert("Se ha quedado sin vidas");
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();
