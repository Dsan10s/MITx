function test_clear(){
    var jqCanvas = $('#test:first');
    var domCanvas = jqCanvas[0];
    var ctx = domCanvas.getContext('2d');
    // x, y, w, h
    ctx.clearRect(0, 0, jqCanvas.width(), jqCanvas.height()); 
}
function test_line(){
    var jqCanvas = $('#test:first');
    var domCanvas = jqCanvas[0];
    var ctx = domCanvas.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(150, 150);
    ctx.lineTo(50, 150);
    ctx.lineTo(50, 50);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    
    ctx.fillStyle = "black";
    ctx.fill();
}    
function test_rect(){
    var jqCanvas = $('#test:first');
    var domCanvas = jqCanvas[0];
    var ctx = domCanvas.getContext('2d');
    
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(25, 25, 100, 100);
    ctx.fillStyle = "blue";
    ctx.fillRect(75, 75, 100, 100);
}
function test_smiley(){
    var jqCanvas = $('#test:first');
    var domCanvas = jqCanvas[0];
    var ctx = domCanvas.getContext('2d');
    
    ctx.beginPath();
    // cx, cy, stAngle, endAngle
    ctx.arc(100, 100,75, 0, 2*Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, 2*Math.PI);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(120, 125, 20, 0, Math.PI);
    ctx.fillStyle = "pink";
    ctx.fill(); 
    
    ctx.beginPath();
    ctx.moveTo(60, 125);
    ctx.lineTo(140, 125);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(120, 125, 20, 0, Math.PI);
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.stroke();
   
    ctx.beginPath();
    ctx.arc(70, 70, 10, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(130, 70, 10, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();    
}
function test_text(){
    var jqCanvas = $('#test:first');
    var domCanvas = jqCanvas[0];
    var ctx = domCanvas.getContext('2d');
    
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.textAlign = "center"; //left, right
    ctx.textBaseline = "middle"; //top, bottom, alphabetic
    ctx.fillText("Sup", 100, 100);
}
function test_mouse(){
    var jqCanvas = $('#test:first');
    var domCanvas = jqCanvas[0];
    var ctx = domCanvas.getContext('2d');
    
    var bgImage = $("<canvas></canvas>")[0];
    bgImage.width = 200;
    bgImage.height = 200;
    var bctx = bgImage.getContext('2d');
    bctx.fillStyle = "#F0FFF0";
    bctx.fillRect(0, 0, 200, 200);
    bctx.fillStyle = "#FF00FF";
    bctx.fillRect(10, 10, 100, 100);
    
    //(image, x, y)
    ctx.drawImage(bgImage, 0, 0);
    
    jqCanvas.on("mousemove", function(event){
        var mx = event.pageX;
        var my = event.pageY;
        
        var offset = jqCanvas.offset(); // {left: ..., top: ...}
        mx = Math.round(mx - offset.left);
        my = Math.round(my - offset.top);
        
        ctx.drawImage(bgImage, 0, 0);
        
        ctx.beginPath();
        ctx.moveTo(mx-10, my);
        ctx.lineTo(mx+ 10, my);
        ctx.moveTo(mx, my-10);
        ctx.lineTo(mx, my+10);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
    });
}
