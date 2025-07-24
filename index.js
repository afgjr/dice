let button=document.querySelector('button')

const rn1=Math.floor(Math.random()*6+1)

let image1="images/dice"+rn1+".png"

const rn2=Math.floor(Math.random()*6+1)

let image2="images/dice"+rn2+".png"

let player1=document.querySelector('.p1')

let player2=document.querySelector('.p2')

let text=document.querySelector('h1')

button.addEventListener('click',()=>{
     location.reload()  
})
player1.setAttribute("src", image1)

    player2.setAttribute("src", image2)
     
    if(rn1>rn2){
    text.innerHTML=`Player 1 Win<span><img src="./images/red-flag.svg" alt="red-flag" width="50px"></span>`
    } 
    else if(rn2>rn1){
     text.innerHTML=`Player 2 Win<span><img src="./images/red-flag.svg" alt="red-flag" width="50px"></span>`
    } else{
        text.textContent=`Draw!`
    }
setTimeout(()=>{
        text.textContent=`Refresh Me`
    },5000)









