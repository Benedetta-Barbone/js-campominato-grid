const griglia = document.querySelector('.griglia');

for (index=0; index<100 ; index++){
    let cella = document.createElement('div');
    cella.classList.add('cella');
    griglia.appendChild(cella);

    let numeroCella = document.createElement('span');
    cella.appendChild(numeroCella);
    numeroCella.append(index + 1);
    
    cella.addEventListener("click", function() {
        cella.classList.add('active')
        console.log("Hai cliccato sulla cella numero:", numeroCella);
    });
}