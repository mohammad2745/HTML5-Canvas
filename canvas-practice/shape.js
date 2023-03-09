window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded() {
    canvasApp();
}

function canvasSupport() {
    return Modernizr.canvas;
}

function canvasApp() {
    if (!canvasSupport()) {
        return;
    } else {
        var theCanvas = document.getElementById("canvas");
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
        var context = theCanvas.getContext("2d");
    }

    drawScreen();

    function drawScreen() {
        //Rectangle Shape
        context.fillStyle = '#000000';
        context.strokeStyle = '#ff00ff';
        context.lineWidth = 2;
        context.fillRect(10, 10, 40, 40);
        context.strokeRect(0, 0, 60, 60);
        context.clearRect(20, 20, 20, 20);

        // Line Shape
        context.strokeStyle = "black";
        context.lineWidth = 1;
        context.lineCap = 'square';
        context.beginPath();
        context.moveTo(90, 0);
        context.lineTo(200, 0);
        // context.lineJoin = 'bevel'  //Join edge of two line
        // context.lineTo(45, 250);
        context.stroke();
        context.closePath();

        // Circle Shape
        context.beginPath();
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        context.beginPath();
        context.arc(250, 100, 10, 0, Math.PI * 2);
        // context.bezierCurveTo(0, 0, 100, 250, 0, 0); // line curve
        context.stroke();
        context.closePath();
    }
}