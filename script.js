const textResult = document.getElementById("text-result");
const botResult = document.getElementById("bot-result");

let pilihanUser = document.querySelectorAll('.pilihan');
pilihanUser[0].addEventListener('click', function(e){
    e.target.style.backgroundColor = "azure";
    pilihanUser[1].style.backgroundColor = "teal";
    pilihanUser[2].style.backgroundColor = "teal";
});

pilihanUser[1].addEventListener('click', function(e){
    e.target.style.backgroundColor = "azure";
    pilihanUser[0].style.backgroundColor = "teal";
    pilihanUser[2].style.backgroundColor = "teal";
});

pilihanUser[2].addEventListener('click', function(e){
    e.target.style.backgroundColor = "azure";
    pilihanUser[0].style.backgroundColor = "teal";
    pilihanUser[1].style.backgroundColor = "teal";
});

function pilih(pilihan){

    let ok = ["✌️","🖐️","👊"];
    let rando = Math.floor(Math.random() * 3); 

    textResult.innerHTML = "";

    // console.log("computer" + rando);
    // console.log("anda" + pilihan);

    let int = setInterval(function () {
        let ok = ["✌️","🖐️","👊"];
        let rando = Math.floor(Math.random() * 3); 
        botResult.innerHTML = ok[rando];
    },100)


    setTimeout(function() {
        if ( pilihan == rando ) {
            textResult.innerHTML = "SERI!!"
            botResult.innerHTML = ok[rando];
        } else if ( pilihan != rando ) {
            if ( rando > pilihan ) {
                if ( rando == 1 && pilihan == 0 ) {
                    textResult.innerHTML = "KAMU MENANG!!"
                    botResult.innerHTML = ok[rando];
                } else if ( rando == 2 && pilihan == 1 ) {
                    textResult.innerHTML = "KAMU MENANG!!"
                    botResult.innerHTML = ok[rando];
                } else {
                    textResult.innerHTML = "KAMU KALAH!!"
                    botResult.innerHTML = ok[rando];
                }
            } else if ( rando < pilihan ) {
                if ( rando == 0 && pilihan == 1 ) {
                    textResult.innerHTML = "KAMU KALAH!!"
                    botResult.innerHTML = ok[rando];
                } else if ( rando == 1 && pilihan == 2 ) {
                    textResult.innerHTML = "KAMU KALAH!!"
                    botResult.innerHTML = ok[rando];
                } else {
                    textResult.innerHTML = "KAMU MENANG!!"
                    botResult.innerHTML = ok[rando];
                }
            }
        }
        clearInterval(int);
    },3000)
}
