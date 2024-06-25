
const input_mezok = document.querySelectorAll(".input");
const inputArray = Array.from(input_mezok);
let eletkor = 72;
let tomb = [];
let sulytobblet = 0;



function mezoVizsgal (mezo) {
    tomb = Array.from(mezo.parentElement.parentElement.children);
    tomb.forEach(function(item) {
        item.style.backgroundColor = "#FF8889";
    })
}

for (let check of input_mezok ) {
    check.checked = false;
}


    for (let mezo of input_mezok) {
        mezo.onclick = function(event) {


            for (let i = 0; i < inputArray.length; i++) {
                tomb = Array.from(inputArray[i].parentElement.parentElement.children);
                tomb.forEach(function(item) {
                    item.style.backgroundColor = "#EEE";
                })
            }


            if (event.target.dataset.kategoria === "nem-1") {
                document.getElementById("no").checked = true;
            }


    
            for (let i = 0; i < inputArray.length; i++) {
                for (let j = 0; j < inputArray.length; j++) {
                    if (inputArray[i].checked && inputArray[j].checked) {
                        if (inputArray[i].dataset.kategoria === `${inputArray[i].dataset.tipus}-1` && inputArray[j].dataset.kategoria === `${inputArray[i].dataset.tipus}-2` || inputArray[i].dataset.kategoria === `${inputArray[j].dataset.tipus}-3`) {
                            mezoVizsgal(inputArray[i]);
                            mezoVizsgal(inputArray[j]);
                        }
                    }

 
                }
            }
    
        }
    }




document.querySelector(".input-fields").addEventListener("submit", function(event) {
    event.preventDefault();

    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].checked) {
            eletkor += parseInt(inputArray[i].value);
        }    
    }

    document.getElementById("eletkor").innerHTML = `A vérható életkor: ${eletkor} év.`;
   
});


    for (let item of document.querySelectorAll(".input-data")) {
        item.addEventListener("keyup", function(event) {
            let suly = parseFloat(document.getElementById("suly").value);
            let magassag = parseFloat(document.getElementById("magassag").value) / 100;
            let elhizas3 = document.getElementById("3_elhizas");
            let elhizas2 = document.getElementById("2_elhizas");
            let elhizas1 = document.getElementById("1_elhizas");

            elhizas1.checked = false;
            elhizas2.checked = false;
            elhizas3.checked = false;

            magassag *= magassag;
            sulytobblet = parseInt(suly - 25 * magassag); 

            if (sulytobblet !== "NaN" && sulytobblet < 200) { 

            document.getElementById("sulytobblet").value = sulytobblet;

            }

            if (sulytobblet >= 5 && sulytobblet <= 15) {
                elhizas1.checked = true;
            } else if (sulytobblet > 15 && sulytobblet <= 25) {
                elhizas2.checked = true;
            } else if (sulytobblet > 25) {
                elhizas3.checked = true;
            }
        })
    }
