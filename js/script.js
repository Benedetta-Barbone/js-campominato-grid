const griglia = document.querySelector('.griglia');

for (index=0; index<100 ; index++){
    let cella = document.createElement('griglia');
    cella.classList.add('cella');
    griglia.appendChild(cella);
}