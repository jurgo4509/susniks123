function peresanaLaiks() {
    let datums = new Date(peresanaIevade.value);
    let dienas = 21;
    let beiguDatums = datums.setDate(datums.getDate() + dienas);
    let rez = new String("Cāļi izšķilsies: " + beiguDatums.getDate() + "." + (beiguDatums.getMonth()+1) + "." + beiguDatums.getFullYear() + ".");
    peresanaIzvade.innerHTML = rez;
}