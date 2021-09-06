let i = 0;

//Setting Initial Value for the Counter Value
function setInitialValue(x){
    document.querySelector('.theValue').textContent = x;
}
setInitialValue(i);

// Increase Button
let inc = document.querySelector('.Increase');
inc.addEventListener('click',()=>{
    i++;
    setInitialValue(i);
    checkTheValue(i);
})

//Decrease Button
let dec = document.querySelector('.Decrease');
dec.addEventListener('click',()=>{
    i -= 1;
    setInitialValue(i);
    checkTheValue(i);
})

//Reset Button
let reset = document.querySelector('.Reset');
reset.addEventListener('click',()=>{
    i = 0;
    setInitialValue(i);
    checkTheValue(i);
})

//Function to change color based on value
function checkTheValue(i){
    let valueColor = document.querySelector('.theValue');
    if(i<0){
        valueColor.style.color = 'red';
    }
    else if(i>0){
        valueColor.style.color = 'brown';
    }
    else if(i==0){
        valueColor.style.color = 'black'
    }
}