




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