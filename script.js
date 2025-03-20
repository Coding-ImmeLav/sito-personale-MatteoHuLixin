// creo una variabile uguale a 0
let a = 0;

function compariMenu(){
    if(a==0) {
        // se la a vale 0 succede quello ce scrivo qui
        document.getElementById("menu").style.display = "initial";
        a = 1;  

    }

    else if (a==1) {
        document.getElementById("menu").style.display = "none";
        a==0;
    }
}
