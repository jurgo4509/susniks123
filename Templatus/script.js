let pamatne = document.getElementById("manaPamatne");
let attels = pamatne.getContext("2d");

window.addEventListener('keydown', piespiests)
window.addEventListener('keyup', atlaists)

let x = 0;
let y = 0;

let ferrari = new Image(200, 80);
ferrari.src = "ferrari.png";
ferrari.onload = function () {
    attels.drawImage(ferrari, 300, 300);
};

function piespiests(b) {
    info.innerHTML = "Piespiests";
    switch(b.keyCode){
        case 27:
            alert("Tika piespiests Esc taustiņš");
            break;
        case 37:
            info2.innerHTML = "← = 37"
            if (x - ferrari.width - 100 > attels.width){
                x = x - 5;
                attels.clearRect(0, 0, 600, 600);
                attels.drawImage(ferrari, x, y, 200, 80);
            }
            break;
        case 38:
            info2.innerHTML = "↑ = 38"
            y = y - 5;
            if (y + ferrari.height + 40 > attels.height){
                attels.clearRect(0, 0, 600, 600);
                attels.drawImage(ferrari, x, y, 200, 80);
            }
            else{
                y = y + 5;
            }
            break;
        case 39:
            info2.innerHTML = "→ = 39"
            if (y + ferrari.width + 40 > attels.height){
                x = x + 5;
                attels.clearRect(0, 0, 600, 600);        
                attels.drawImage(ferrari, x, y, 200, 80);
            }
            break;
        case 40:
            info2.innerHTML = "↓ = 40"
            if (y + ferrari.height + 40 < attels.height){
                y = y + 5;
                attels.clearRect(0, 0, 600, 600);
                attels.drawImage(ferrari, x, y, 200, 80);
            }        
            break;
        case 86:
            info2.innerHTML = "V = 86"
            document.body.style.background = "#576e91";
            break;
        case 82:
            info2.innerHTML = "R = 82"
            document.body.style.background = "red";
            break;
        case 71:
            info2.innerHTML = "G = 71";
            document.body.style.background = "green";
            break;
        case 66:
            info2.innerHTML = "B = 66"
            document.body.style.background = "blue";
            break;
    }
}


function atlaists() {
    info.innerHTML = "Atlaists";
}