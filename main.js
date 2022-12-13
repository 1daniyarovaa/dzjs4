

let count1 = document.querySelector('.glavnaya')
console.log(count1);

count1.style.cssText = 'color:yellow;'
count1.style.fontSize = '35px'
count1.style.textShadow = "6px 5px 7px red"

let centertext = document.querySelector('.center')
console.log(centertext);

document.body.style.cssText = `
text-align: center;
place-items: center;
display:flex ;
place-content: center;
`
centertext.style.border = '3px solid green '
centertext.style.height = '300px'
centertext.style.width = '400px'

let buttons = document.querySelector('.btn1')
console.log(buttons);
buttons.style.height = '30px'
buttons.style.width = '70px'

let button = document.querySelector('.btn2')
console.log(button);
button.style.height = '30px'
button.style.width = '70px'


let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let int = document.querySelector('.numb')


let integer = 0;

btn1.addEventListener("click", function() {
    integer += 1;
    int.textContent = integer;
})
btn2.addEventListener("click", function() {
    integer -= 1;
    int.textContent = integer;
})