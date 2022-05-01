let dropOne = document.getElementsByClassName('drop-btn')[0];
let dropTwo = document.getElementsByClassName('drop-btn')[1];

let contentOne = document.getElementsByClassName('drop-content')[0];
let contentTwo = document.getElementsByClassName('drop-content')[1];

dropOne.addEventListener('click', ()=> {
    contentOne.classList.toggle("drop-content-1");
})

dropTwo.addEventListener('click', ()=> {
    contentTwo.classList.toggle("drop-content-2");
})

console.log(dropOne);