




let augumi = [152,155,154,135,142,158,131,137,144,145,147,150,142,154,144,164,145,147];
let sum = 0;
let meitsk = 0;
let mazakais = augumi[0];

for(let i = 0; i < augumi.length; i++){
    sum = sum + augumi[i];
    if(augumi[i] <= 145){
        meitsk++;
    }
    if(augumi[i] < mazakais){
        mazakais = augumi[i];
    }
}
vidAug.innerHTML = Math.round(sum / augumi.length);
meitSk.innerHTML = meitsk;
iisAug.innerHTML = mazakais;





let laiki = ["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"];
let gaisaMirtums = [57, 57, 57, 59, 58, 57, 57, 57];
mazakais = gaisaMirtums[0];
let lIter = 0;
let pulkstn = "";

for(let i = 0; i < gaisaMirtums.length; i++){
    if(gaisaMirtums[i] < mazakais){
        mazakais = gaisaMirtums[i];
    }
}

gaisaMitr.innerHTML = mazakais;

for(let i = 0; i < gaisaMirtums.length; i++){
    if(gaisaMirtums[i] == mazakais){
        if(lIter == 0){
            pulkstn = pulkstn + laiki[i];
            console.log("sus");
        }
        if(lIter > 0){
            pulkstn = pulkstn + ", " + laiki[i];
        }
        lIter++;
    }
}

pulksten.innerHTML = pulkstn;



function peresanaLaiks() {
    let datums = new Date(peresanaIevade.value);
    let dienas = 21;
    let beiguDatums = datums.setDate(datums.getDate() + dienas);
    let rez = new String("Cāļi izšķilsies: " + beiguDatums.getDate() + "." + (beiguDatums.getMonth()+1) + "." + beiguDatums.getFullYear() + ".");
    peresanaIzvade.innerHTML = rez;
}


let pratavetrateksts = 'Grupas "Prāta vētra" dziesmas "Bronza / Монца / They Know How to do it well" fragments (albums "Tur kaut kam ir jābūt").'
prataV1.innerHTML = pratavetrateksts;

pratavetrateksts = "smalkā mis'" + "<br>" + "viņa zin', pirmā vieta - tas ir viss" + "<br>" + "tas ir viss, atliek saukt tik uz 'bis'";
prataV2.innerHTML = pratavetrateksts;

 
let pasakasTeksts = "<p>" + "Ezis un zaķis salīguši sava starpā, ka tas, kas ātrāki noskries līdz norunātai vietai, dabūs no uzvarētā viņa spalvu. Ezis, apzinādamies savu nespēcību tanī ziņā, apņēmies zaķi pievilt. Viņš nostādījis jau agrāk norunātā vietā savu mātīti." + "</p><p></p><p>" + "Kad zaķis noskrējis norunātā vietā, tad eža sieva tur jau bijusi priekšā – tā teikusi, ka esot ilgi jau gaidījusi – un izrāvusi zaķim viņa spalvu un ar to izgreznojusi savu un sava vīra vēderu." + "</p>";
pasaka.innerHTML = pasakasTeksts;


function pasakaSearch(){
    let pRezultats = pasakasTeksts.includes(pasakaDzivnieks.value);
    if(pRezultats){
        pasakaIzvade.innerHTML = "Atrasts";
    }
    else{
        pasakaIzvade.innerHTML = "Neatrasts";
    }
}


let loremIpsum = "Lor*m ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue vehicula massa. Nullam vestibulum feugiat diam, ut efficitur purus consectetur a. Sed id rutrum nisi, et varius justo. Maecenas porta elit tincidunt consequat dapibus. Morbi viverra quam a odio faucibus placerat. Ut magna metus, aliquet et auctor nec, iaculis nec est. Aenean ante nisi, dapibus sit amet ante nec, porttitor pellentesque quam. Mauris id nibh tincidunt, laoreet tortor eget, efficitur quam. Vestibulum ut imperdiet turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sit amet eros enim. Mauris vestibulum urna eget erat ultricies vehicula. Mauris ornare orci et metus egestas, eget porta massa consequat. Sed convallis justo sed risus tristique volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
lipsum.innerHTML = loremIpsum;


function rindkopaAizvietot(){
    loremIpsum = loremIpsum.replace(aizvietojamais.value, aizvietosanasLauks.value);
    lipsum.innerHTML = loremIpsum;
}


let mas3skoleni = ["Linda", "Kārlis", "Emīls", "Agnese", "Marta", "Elvīra", "Emīls", "Sintija", "Raitis", "Ilze", "Santa", "Gatis"];
let mas3punkti = [10, 11, 6, 10, 14, 16, 8, 9, 12, 7, 6, 15];

function masVid(masivs){
    let videjais = 0;
    for(let i = 0; i < masivs.length; i++){
        videjais = videjais + masivs[i];
    }
    videjais = videjais / masivs.length;
    return videjais;
}

masVidP.innerHTML = Math.round(masVid(mas3punkti));

let vaimakspk = "Nē";
for(let i = 0; i < mas3punkti.length; i++){
    if(mas3punkti[i] == 16){
        vaimakspk = "Jā";
    }
}

masMaxP.innerHTML = vaimakspk;

masMarP.innerHTML = mas3punkti[4];

let mazpsk = mas3punkti[0];
for(let i = 0; i < mas3punkti.length; i++){
    if(mazpsk > mas3punkti[i]){
        mazpsk = mas3punkti[i];
    }
}

lIter = 0;
mazpksksk = "";

for(let i = 0; i < mas3punkti.length; i++){
    if(mas3punkti[i] == mazpsk){
        if(lIter == 0){
            mazpksksk = mazpksksk + mas3skoleni[i];
        }
        if(lIter > 0){
            mazpksksk = mazpksksk + ", " + mas3skoleni[i];
        }
        lIter++;
    }
}

masMazP.innerHTML = mazpksksk;


const skoleni = [
    ["Laura", "Lasmane"],
    ["Artūrs", "Kalniņš"],
    ["Kristaps", "Šteinbergs"],
    ["Marks", "Ozols"],
    ["Krista", "Zemīte"],
    ["Luīze", "Veinberga"],
    ["Jānis", "Kļaviņš"],
    ["Amanda", "Grīva"],
    ["Nils", "Zāle"],
    ["Aleksis", "Semjonovs"]
];

ddm3sk.innerHTML = skoleni[2][0] + " " + skoleni[2][1];
ddmPsk.innerHTML = skoleni[skoleni.length - 1][0] + " " + skoleni[skoleni.length - 1][1];

for(let i = 0; i < skoleni.length; i++){
    let sk = i + 1;
    ddmVsr.innerHTML = ddmVsr.innerHTML + "<p>" + sk + '. ' + skoleni[i][0] + ' ' + skoleni[i][1] + "</p>";
}


const dati = [
[80, 35, 18, "red"],
[61, 103, 28, "pink"],
[145, 127, 31, "cyan"],
[123, 61, 22, "yellow"],
[215, 87, 25, "green"]
]



let ctx = canva.getContext("2d");
for(let i = 0; i < dati.length; i++){
    rinki2d(dati, i);
}


function rinki2d(masivus, aplsk){
    x = masivus[aplsk][0] * 2;
    y = masivus[aplsk][1] *2;
    radius = masivus[aplsk][2] *2;
    krasa = masivus[aplsk][3];
    ctx.fillStyle = krasa;
    bumba(x, y, radius);
}


function bumba(fx, fy, fr) {
    ctx.beginPath();
    ctx.arc(fx, fy, fr, 0, 2 * Math.PI);
    ctx.fill();
}


let panelis = [
[0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 1, 1, 0],
[1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 1, 1, 0],
[0, 0, 0, 0, 0, 1, 0, 0]
];

// ctx = panelis.getContext("2d");
// let x, y, i, j;
// let r = 20;
// let rindas = 5;
// let kolonnas = 8;
// zim.fillStyle = "yellow";
// for (j = 0; j < rindas; j ++) {
// for (i = 0; i < kolonnas; i ++) {
// x = r + r * 2 * i;
// y = r + r * 2 * j;
// bumba();
// }
// }


let randMas = [];

for(let i = 0; i < 108; i++){
    randMas[i] = Math.floor((Math.random() * 99) + 1);
}
masivsusyy.innerHTML = masOutput(randMas);

masMazVertibaX.innerHTML = masivSearch("min",randMas)[0];
artVietaMasMazVertibaX.innerHTML = masivSearch("min",randMas)[1];

masLielVertibaX.innerHTML = masivSearch("max",randMas)[0];
artVietaMasLielVertibaX.innerHTML = masivSearch("max",randMas)[1];





function masSwap(a, b, masivs){
    let temp = masivs[a];
    masivs[a] = masivs[b];
    masivs[b] = temp;
    return masivs;
}


function masivSearch(maxVaiMin, masivs){
    if(maxVaiMin == "max"){
        let max = masivs[0];
        let iterator = 0;
        for(let i = 1; i < masivs.length; i++){
            if(max < masivs[i]){
                max = masivs[i];
                iterator = i;
            }
        }
        let returnmas = [max, iterator + 1];
        return returnmas;
    }
    else if(maxVaiMin == "min"){
        let min = masivs[0];
        let iterator = 0;
        for(let i = 1; i < masivs.length; i++){
            if(min > masivs[i]){
                min = masivs[i];
                iterator = i;
            }
        }
        let returnmas = [min, iterator + 1];
        return returnmas;
    }
}


function masOutput(masivs){
    let masivoutput = masivs[0];
    for(let i = 1; i < masivs.length; i++){
        masivoutput = masivoutput + ", " + masivs[i];
    }
    return masivoutput;
}