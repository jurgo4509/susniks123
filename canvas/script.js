// let pamatne = document.getElementById("manaPamatne");
// let zimejums = pamatne.getContext("2d");
// let x = 0;
// function kvadr(){
//     zimejums.lineWidth= 5;
//     zimejums.strokeRect(x + 5,x + 5,50,50);
//     x = x + 1;
// }
// function eraser(){
//     x = 0;
//     zimejumslineWidth = 1;
//     zimejums.clearRect(0,0,200,100);    
// }


// cikls ar skaititaju


// 1. Vingrinajums

// let b = 12;
// let c = 5;
// let d = Number(prompt("Ievadiet skaitli d:"));
// let e = Number(prompt("Ievadiet skaitli e:"));
// let a = (2 * b + c) / (d - e);
// alert(a);

// 2. Vingrinajums

// let r = Number(prompt("Ievadiet rādiusu: "));
// let c = 2 * Math.PI * r;
// alert("Rinķa līnijas garums ir: " + c);
// let vesels = Math.round(c);
// alert("Noapaļots: " + vesels);
// let x = Number(prompt("Ievadiet kāpināmo: "));
// let pakape = Number(prompt("Ievadiet pakāpi: "));
// let y = Math.pow(x, pakape);
// alert(x + " kāpināts " + pakape + ". pakāpē = " + y);
// let z = Math.sqrt(y);
// alert("Kvadratsakne no " + y + " = " + z);
// let a = Math.abs(x - r);
// alert(`Modulis no ${x} un ${r} starpības = ${a}`);

// 3. Vingrinājums

// let platums = Number(prompt("Ievadi taisnstūra platumu: "));
// let augstums = platums / 2;
let pamatne = document.getElementById("manaPamatne");
let zimejums = pamatne.getContext("2d");
// zimejums.lineWidth= 5;
// zimejums.fillRect(10,10,platums,augstums);


for (let i = 0; i < 5; i++) {
    zimejums.beginPath();
    zimejums.arc(305, 150,  Math.random() * 145, 0, 2 * Math.PI);
    zimejums.stroke();
}

pamatne = document.getElementById("manaPamatne2");
zimejums = pamatne.getContext("2d");

for(let i = 0; i < 1; i++) {
    zimejums.beginPath();
    zimejums.rect(5, 5, 60, 60);
    zimejums.stroke();
}

pamatne = document.getElementById("manaPamatne3");
zimejums = pamatne.getContext("2d");

for(let i = 0; i < 3; i++) {
    zimejums.beginPath();
    zimejums.rect(5, 5+5*i + 60*i, 60, 60);
    zimejums.stroke();
}

pamatne = document.getElementById("manaPamatne4");
zimejums = pamatne.getContext("2d");

for(let y = 0; y < 3; y++) {
    for(let x = 0; x < 3; x++){
        zimejums.beginPath();
        zimejums.rect(5+5*x+60*x, 5+5*y+60*y, 60, 60);
        zimejums.stroke();
    }
}

// zarošanās


function bumba(xcoord, ycoord, radius, krasa){
    ctx.beginPath();
    ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI);
    ctx.fillStyle = krasa;
    ctx.fill();
    ctx.stroke();
}


function zone(){
    for(i = 0; i < 3; i++){
        ctx.beginPath();
        ctx.moveTo(100*i, 0);
        ctx.lineTo(100*i, 300);
        ctx.stroke();
    }
}



pamatne = document.getElementById("zarosanas1");
ctx = pamatne.getContext("2d");

x = Math.random()*3*100;
y = Math.random()*3*100;
r = 25;
k = "red";
zona = 3;

// 1. uzdevums

if(x > 0 && x < 101){
    k = "red";
}
else if(x > 100 && x < 201){
    k = "blue";
}
else if(x > 200 && x < 301){
    k = "green";
}

bumba(x, y, r, k);
zone();

// switch case

// let kakisd = prompt("Kaķis ņaud.");

// switch(kakisd){
//     case "MEOW":
//         izvade = "angļu";
//         break;
//     case "MIAO":
//         izvade = "itāļu";
//         break;
//     case "MJAU":
//         izvade = "zviedru";
//         break;
//     case "MIAOU":
//         izvade = "franču";
//         break;
//     default:
//         izvade = "nezināmā";
// }

// alert(`Kaķis ņaud ${izvade} valodā.`);

let loterija = Math.round(Math.random() * 100);
// alert(loterija);

// switch(loterija){
//     case 55:
//     case 17:
//     case 60:
//     case 54:
//     case 31:
//     case 38:
//     case 66:
//     case 95:
//     case 86:
//     case 2:
//         alert('TU UZVARĒJI LOTERIJĀ!!');
//         break;
//     default:
//         alert('Tu zaudē :(');
// }

// Dažādi uzdevumi

// Zīmuzd. 1

// function kvadrats(x, y, width, height, linewidth){
//     ctx.lineWidth= linewidth;
//     ctx.strokeRect(x, y, width, height);
// }

// pamatne = document.getElementById("dazUzd1");
// ctx = pamatne.getContext("2d");

// let x1 = prompt("Ievadi 'x1':");
// let x2 = prompt("Ievadi 'x2':");
// let y1 = prompt("Ievadi 'y1':");
// let y2 = prompt("Ievadi 'y2':");

// kvadrats(x1, y1, x2, y2);

// Zīmuzd. 2

// function kvadrats(x, y, width, height, linewidth){
//     ctx.lineWidth= linewidth;
//     ctx.strokeRect(x, y, width, height);
// }

// pamatne = document.getElementById("dazUzd1");
// ctx = pamatne.getContext("2d");

// let x1 = prompt("Ievadi 'x1':");
// let x2 = 200 - 25 - x1;
// let y1 = prompt("Ievadi 'y1':");
// let y2 = 200 - 40 - y1;

// kvadrats(x1, y1, x2, y2, 5);

// Zīmuzd. 3

// function kvadrats(x, y, width, height, linewidth){
//     ctx.lineWidth= linewidth;
//     ctx.fillRect(x, y, width, height);
// }

// pamatne = document.getElementById("dazUzd1");
// ctx = pamatne.getContext("2d");

// let x1 = prompt("Ievadi 'x':");
// let x2 = 200 - x1*2;
// let y1 = prompt("Ievadi 'y':");
// let y2 = 200 - y1*2;

// kvadrats(x1, y1, x2, y2, 5);

// // rēķuzd. 1

// let a = prompt("Ievadi 'a'");
// let b = prompt("Ievadi 'b'");
// let m = prompt("Ievadi 'm'");
// let n = prompt("Ievadi 'n'");

// k = (b * (b - a))/( 3 * m * (b - n));

// console.log(`'k' vērtība ir ${k}.`);

// // rēķuzd. 2 

// let slimShady = prompt("Ievadi savu vārdu!");
// alert(`Mans vārds ir ${slimShady}.`);

// // rēķuzd. 3

// let x , y;
// x = "5" + 2 + 3;
// y = 2 + 3 + "4" + 1;
// alert("x = " + x + " " + "y = " + y);

// Patstāvigais darbs

let smagieAuto, vieglieAuto;

smagieAuto = smagoAutoSk.value;
vieglieAuto = viegloAutoSk.value;

function poga1(){
    if(smagieAuto > 1){
        alert("Tilts minus :(");
    }
    else if(smagieAuto + vieglieAuto > 3){
        alert("Tilts minus :(");
    }
}

let karpamatne = document.getElementById("karogupamatne");
let contextus = karpamatne.getContext("2d");

function zimetkarogus(){
    contextus.clearRect(0, 0, 611, 350);

    let x, y, reiz, pamkrasa, elementkrasa, img;

    img = document.getElementById("serbija");

    if(liels.checked){
        reiz = 2;
    }
    else if(videjs.checked){
        reiz = 1;
    }
    else if(mazs.checked){
        reiz = 0.5;
    }

    x = 300 * reiz;
    y = 200 * reiz;

    //pamatne

    if(indonezija.checked || japana.checked){
        pamkrasa = "white";
    }
    else if(bangladesa.checked){
        pamkrasa = "#006747"
    }

    contextus.beginPath();
    contextus.rect(0, 0, x, y);
    contextus.fillStyle = pamkrasa;
    contextus.fill();
    contextus.stroke();

    //pari

    let xVar = 0.5;

    if(japana.checked){
        elementkrasa = "#BC002D";
        xVar = 0.5;
    }
    else if(bangladesa.checked){
        elementkrasa = "#DA291C";
        xVar = 0.45;
    }
    else if(indonezija.checked){
        elementkrasa = "255, 255, 23";
    }

    if(indonezija.checked){
        contextus.beginPath();
        contextus.rect(0, 0, x, y*0.5);
        contextus.fillStyle = "#ff0000";
        contextus.fill();
    }
    else if(japana.checked || bangladesa.checked){
        contextus.beginPath();
        contextus.arc(x*xVar, y*0.5, y/5*1.5, 0, 2 * Math.PI);
        contextus.fillStyle = elementkrasa;
        contextus.fill();
    }

    contextus.drawImage(img,0,0,300,100);
}