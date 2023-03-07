var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = 'blue';
        c.stroke();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


var circleArray = [];

for (let i = 0; i < 500; i++) {

    var radius = 30,
        x = Math.random() * (innerWidth - radius * 2) + radius,
        y = Math.random() * (innerHeight - radius * 2) + radius,
        dx = (Math.random() - 0.5) * 8,
        dy = (Math.random() - 0.5) * 8;

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

// console.log(circleArray);


function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);
    // circle.update();
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    // console.log(circleArray.length);
}


animate();