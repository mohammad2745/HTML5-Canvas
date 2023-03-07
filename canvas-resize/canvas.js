var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = "rgba(255,0,0,.5)";
c.fillRect(100, 100, 100, 100)


//Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.strokeStyle = "#fa34a3";
c.stroke();

//Arc