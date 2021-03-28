const colors=["green", "red", "rgba(133,122,200)","#f15025","#f53d00","#f5b800","#3df500","#00f57a","#00f5f5","#0000f5","#7a00f5","#f500b8"];


const btn= document.getElementById('btn');
const bolor=document.querySelector('.color');


btn.addEventListener('click', function(){
//get random number between 0-3

    const randomNumber=getrandom();
    console.log(randomNumber)
    document.body.style.backgroundColor=colors[randomNumber];
    colors.textContent=colors[randomNumber];
})

function getrandom(){
    return Math.floor(Math.random()* colors.length);
}