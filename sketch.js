var myImage, myImage2;
var state=true;

function preload(){
    myImage=loadImage("images/texture.jpg");    
    myImage2=loadImage("images/texture.jpg");
    
}
function setup() {
createCanvas(windowWidth,windowHeight);  
imageMode(CENTER);
angleMode(DEGREES);
myImage2.filter("invert");
}

function draw() {
    
    background(255);
    backgroundImage(myImage);
    if(state==false){
        backgroundImage(myImage2); 
    }
    
//second
    var s=second()*6;
    for(var x=0;x<=s;x+=6){ 
        var posX=width/2+(250*cos(x-90));
        var posY=height/2+(250*sin(x-90)); 
        var myColors= get(posX,posY);
        noStroke();
        fill(myColors);
        ellipse(posX,posY,25,25);
        }
    noFill();    
    strokeWeight(2);
    stroke(get(width/12,5*height/6));
    line(width/2,height/2,width/2+(200*cos(s-90)),height/2+(200*sin(s-90)));
    
//minute          
    var m=minute()*6;
    var posXm=width/2+(200*cos(m-90));
    var posYm=height/2+(200*sin(m-90));
 
    strokeWeight(20);
    stroke(get(11*width/12,height/6));
    line(width/2,height/2,posXm,posYm);

//hour
    var h=hour()*30;
    var posXh=width/2+(100*cos(h-90));
    var posYh=height/2+(100*sin(h-90));
    noFill();
    line(width/2,height/2,posXh,posYh); 
}

function backgroundImage(img) {
    
    var x = width/2;
    var y = height/2;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}

function mousePressed(){
    if(state==true){
          state= false;
    }else{
        state=true;
    }
      
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}