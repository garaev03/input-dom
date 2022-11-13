const BTN=document.getElementById("BTN")
const body=document.querySelector("body")
// const mode=document.getElementById("mode")
const input=document.getElementById("input")
const box=document.getElementById("box")  
const buttons=document.getElementById("buttons")   


let count=0

BTN.addEventListener("click", btn)
BTN.addEventListener("click", clear)
// mode.addEventListener("click",changeMode)


// function changeMode(){
//     body.style.backgroundColor="black"
//     body.style.color="white"
// }
function clear(){
    if(count==0){
    const  button=document.createElement("button")
    button.setAttribute("class","btn btn-outline-danger btn-sm")
    button.style.width="82px"
    button.innerHTML="Clear!"
    buttons.appendChild(button) 
    count++
    button.addEventListener("click",() =>{
        box.innerHTML=""
    })} 
}
function btn() {
    let p=document.createElement("p")
    p.innerHTML+=input.value
    p.setAttribute("class","ms-5 ps-3")
    box.appendChild(p)
    p.addEventListener("click",pclicked)
    input.value=""
    function pclicked(){
        p.remove()
    
}
}

    
