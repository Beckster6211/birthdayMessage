import React, {useState, useEffect, useRef} from 'react';
import { createTextSpanFromBounds } from 'typescript';
// import logo from './logo.svg';
import './App.css';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {

    if(canvasRef.current){
      const renderCtx = canvasRef.current.getContext("2d");

      if(renderCtx){
        setContext(renderCtx)
      }
    }
    if(context){
      //background
context.beginPath();
context.rect(0, 0, 2000, 1000);
context.fillStyle = "beige";
context.fill();
context.closePath();

//cake
context.beginPath();
context.ellipse(900, 645, 100, 50, Math.PI / 1, 0, Math.PI * 2);
context.fillStyle = "chocolate";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.rect(800, 500, 200, 150);
context.fillStyle = "chocolate";
context.fill();
context.closePath();

//cake outline
context.beginPath();
context.moveTo(800, 500);
context.lineTo(800, 650);
context.strokeStyle = "black";
context.lineWidth = 2;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(1000, 500);
context.lineTo(1000, 650);
context.strokeStyle = "black";
context.lineWidth = 2;
context.stroke();
context.closePath();

//icing
context.beginPath();
context.ellipse(814, 522, 22, 15, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "pink";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(843, 543, 22, 18, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "pink";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(880, 553, 22, 21, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "pink";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(922, 553, 22, 21, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "pink";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(959, 540, 22, 18, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "pink";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(988, 520, 22, 13, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "pink";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//icing top
context.beginPath();
context.ellipse(900, 500, 100, 55, Math.PI / 1, 0, Math.PI * 2);
context.fillStyle = "lightPink";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//jam and cream
context.beginPath();
context.lineWidth = 9;
context.lineCap = "round";
context.strokeStyle = "red";
context.bezierCurveTo(803, 585, 870, 645, 995, 590);
context.stroke();
context.closePath();
context.beginPath();
context.lineWidth = 9;
context.lineCap = "round";
context.strokeStyle = "peachPuff";
context.bezierCurveTo(802, 594, 880, 650, 995, 598);
context.stroke();
context.closePath();

// candles
//candle 1
context.beginPath();
context.rect(820, 420, 15, 80);
context.fillStyle = "white";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//pattern
context.beginPath();
context.moveTo(834, 422);
context.lineTo(821, 440);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(834, 447);
context.lineTo(821, 467);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(834, 475);
context.lineTo(821, 493);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
//flame
context.beginPath();
context.ellipse(827, 404, 14, 5.5, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "orange";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(827, 409, 9, 3, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "yellow";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//candle 2
context.beginPath();
context.rect(860, 390, 15, 80);
context.fillStyle = "white";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//pattern
context.beginPath();
context.moveTo(874, 392);
context.lineTo(861, 410);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(874, 417);
context.lineTo(861, 435);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(874, 445);
context.lineTo(861, 463);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
//flame
context.beginPath();
context.ellipse(867, 374, 14, 5.5, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "orange";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(867, 378, 9, 3, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "yellow";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//candle 3
context.beginPath();
context.rect(890, 450, 15, 80);
context.fillStyle = "white";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//pattern
context.beginPath();
context.moveTo(903, 452);
context.lineTo(891, 475);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(903, 479);
context.lineTo(891, 500);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(903, 510);
context.lineTo(891, 527);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
//flame
context.beginPath();
context.ellipse(897, 433, 14, 5.5, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "orange";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(897, 437, 9, 3, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "yellow";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//candle 4
context.beginPath();
context.rect(920, 390, 15, 80);
context.fillStyle = "white";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//pattern
context.beginPath();
context.moveTo(933, 392);
context.lineTo(920, 410);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(933, 417);
context.lineTo(920, 435);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(933, 445);
context.lineTo(920, 463);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
//flame
context.beginPath();
context.ellipse(927, 374, 14, 5.5, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "orange";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(927, 378, 9, 3, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "yellow";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//candle 5
context.beginPath();
context.rect(960, 430, 15, 80);
context.fillStyle = "white";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//pattern
context.beginPath();
context.moveTo(974, 430);
context.lineTo(960, 450);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(974, 460);
context.lineTo(960, 480);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(974, 490);
context.lineTo(961, 508);
context.strokeStyle = "blue";
context.lineCap = "round";
context.lineWidth = 3;
context.stroke();
context.closePath();
//flame
context.beginPath();
context.ellipse(967, 414, 14, 5.5, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "orange";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(967, 418, 9, 3, Math.PI / 2, 0, Math.PI * 2);
context.fillStyle = "yellow";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//balloons
//balloon 1
context.beginPath();
context.ellipse(150, 290, 100, 55, Math.PI / 2.2, 0, Math.PI * 2);
context.fillStyle = "springGreen";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//string
context.beginPath();
context.moveTo(170, 405);
context.lineTo(240, 700);
context.lineWidth = 4;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(168, 388);
context.lineTo(160, 410);
context.lineTo(185, 400);
context.lineTo(168, 388);
context.fillStyle = "springGreen";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//balloon2
context.beginPath();
context.ellipse(255, 290, 100, 55, Math.PI / -2.1, 0, Math.PI * 2);
context.fillStyle = "purple";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//string
context.beginPath();
context.moveTo(245, 395);
context.lineTo(240, 700);
context.lineWidth = 4;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(245, 388);
context.lineTo(230, 410);
context.lineTo(260, 410);
context.lineTo(245, 388);
context.fillStyle = "purple";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//balloon 3
context.beginPath();
context.ellipse(360, 300, 100, 55, Math.PI / -2.3, 0, Math.PI * 2);
context.fillStyle = "orange";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//string
context.beginPath();
context.moveTo(340, 400);
context.lineTo(240, 700);
context.lineWidth = 4;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(345, 390);
context.lineTo(320, 410);
context.lineTo(355, 420);
context.lineTo(345, 390);
context.fillStyle = "orange";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//smiley face
//hat
context.beginPath();
context.moveTo(1700, 350);
context.lineTo(1510, 525);
context.lineTo(1670, 600);
context.lineTo(1700, 350);
context.fillStyle = "white";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//spots
context.beginPath();
context.arc(1670, 410, 15, 0, Math.PI * 2, false);
context.fillStyle = "red";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.arc(1660, 470, 15, 0, Math.PI * 2, false);
context.fillStyle = "yellow";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.arc(1600, 460, 15, 0, Math.PI * 2, false);
context.fillStyle = "blue";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.arc(1605, 515, 15, 0, Math.PI * 2, false);
context.fillStyle = "green";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.arc(1658, 545, 15, 0, Math.PI * 2, false);
context.fillStyle = "orange";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//face
context.beginPath();
context.arc(1550, 650, 130, 0, Math.PI * 2, false);
context.fillStyle = "gold";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//cheeks
context.beginPath();
context.arc(1460, 650, 20, 0, Math.PI * 2, false);
context.fillStyle = "lightPink";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.arc(1645, 650, 20, 0, Math.PI * 2, false);
context.fillStyle = "lightPink";
context.fill();
context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//smile
context.beginPath();
context.bezierCurveTo(1490, 690, 1550, 760, 1610, 690);
context.lineWidth = 3;
context.strokeStyle = "black";
context.stroke();
context.closePath();
//eyes
context.beginPath();
context.bezierCurveTo(1480, 605, 1505, 570, 1540, 605);
context.lineWidth = 3;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.bezierCurveTo(1570, 605, 1595, 570, 1630, 605);
context.lineWidth = 3;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//party blower
context.beginPath();
context.arc(540, 770, 50, 0, Math.PI * 2, false);
context.fillStyle = "silver";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.arc(590, 795, 50, 0, Math.PI * 2, false);
context.fillStyle = "silver";
context.fill();
context.closePath();
context.beginPath();
context.arc(580, 790, 50, 0, Math.PI * 2, false);
context.fillStyle = "silver";
context.fill();
context.closePath();
context.beginPath();
context.arc(570, 785, 50, 0, Math.PI * 2, false);
context.fillStyle = "silver";
context.fill();
context.closePath();
context.beginPath();
context.arc(560, 780, 50, 0, Math.PI * 2, false);
context.fillStyle = "silver";
context.fill();
context.closePath();
context.beginPath();
context.arc(550, 775, 50, 0, Math.PI * 2, false);
context.fillStyle = "silver";
context.fill();
context.closePath();
context.beginPath();
context.arc(600, 800, 50, 0, Math.PI * 2, false);
context.fillStyle = "silver";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(630, 760);
context.lineTo(550, 720);
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(580, 845);
context.lineTo(520, 815);
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(505, 810);
context.lineTo(350, 860);
context.lineTo(380, 890);
context.lineTo(590, 850);
context.fillStyle = "silver";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(350, 860);
context.lineTo(300, 875);
context.lineTo(320, 905);
context.lineTo(380, 890);
context.fillStyle = "red";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.bezierCurveTo(605, 820, 630, 805, 610, 790);
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.bezierCurveTo(585, 785, 570, 815, 605, 820);
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.bezierCurveTo(630, 785, 610, 750, 585, 785);
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.bezierCurveTo(610, 850, 650, 820, 630, 785);
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//party popper
context.beginPath();
context.ellipse(1220, 345, 50, 20, Math.PI / 5, 0, Math.PI * 2);
context.fillStyle = "red";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(1142, 288, 70, 50, Math.PI / 5, 0, Math.PI * 2);
context.fillStyle = "red";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.bezierCurveTo(1260, 375, 1250, 400, 1230, 420);
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(1100, 260, 30, 20, Math.PI / 1.5, 0, Math.PI * 2);
context.fillStyle = "grey";
context.fill();
context.lineWidth = 2;
context.strokeStyle = "black";
context.stroke();
context.closePath();

//message
context.beginPath();
context.font = "90px Comic Sans MS";
context.fillStyle = "black";
context.fillText("Happy", 500, 170);
context.closePath();
context.beginPath();
context.font = "90px Comic Sans MS";
context.fillStyle = "black";
context.fillText("Birthday", 1000, 890);
context.closePath();
    }

  }, [context]);
  return (
    <div className="App">
     <canvas
        id="canvas"
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          border: '2px solid #000',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
        }}
      ></canvas>
    </div>
  );
}

export default App;
