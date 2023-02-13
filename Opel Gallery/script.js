let canvas = document.getElementById("gallery");
let ctx = canvas.getContext("2d");

let opelArray = [];

for(let i = 1; i < 10; i++){
    let source = "opel/o" + i + ".jpg";
    let img = new Image();
    img.src = source;
    opelArray.push(img);
}

let galleryNum = 5;


function draw(x){
    galleryNum = x;
    ctx.clearRect(0,0,600,450);
    ctx.drawImage(opelArray[x], 0, 0);
}


function galleryBack() {
    if(galleryNum > 0){
        galleryNum--;
    }
    console.log(galleryNum);
    draw(galleryNum);
}


function galleryForward() {
    if(galleryNum < 8){
        galleryNum++;
    }
    console.log(galleryNum);
    draw(galleryNum);
}