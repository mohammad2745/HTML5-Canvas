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

    // Rotation Transformation
    function drawScreen() {
        //draw black square
        context.fillStyle = "black";
        context.fillRect(20, 20, 25, 25);
        //now draw a red square
        context.setTransform(1, 0, 0, 1, 0, 0);
        var angleInRadians = 45 * Math.PI / 180;
        var x = 100;
        var y = 100;
        var width = 50;
        var height = 50;
        context.translate(x + .5 * width, y + .5 * height);
        context.rotate(angleInRadians);
        context.fillStyle = "red";
        context.fillRect(-.5 * width, -.5 * height, width, height);
    }

    drawScreen1();
    // Rotation and Scale Transformation
    function drawScreen1() {
        context.setTransform(1, 0, 0, 1, 0, 0);
        var angleInRadians = 45 * Math.PI / 180;
        var x = 200;
        var y = 100;
        var width = 50;
        var height = 50;
        context.translate(x + .5 * width, y + .5 * height);
        context.scale(2, 2);
        context.rotate(angleInRadians);
        context.fillStyle = "red";
        context.fillRect(-.5 * width, -.5 * height, width, height);
    }
}