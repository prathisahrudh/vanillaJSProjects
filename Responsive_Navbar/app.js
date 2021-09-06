let toggleButton = document.getElementsByClassName("toggle-links")[0];
let listItems = document.getElementsByClassName("lists")[0];


toggleButton.addEventListener('click',()=>{
    listItems.classList.toggle('active');
})