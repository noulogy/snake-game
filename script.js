const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawStuff();
    }

    function drawStuff() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(100, 100, 100, 100);
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);