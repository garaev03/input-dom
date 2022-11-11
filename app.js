const BTN=document.getElementById("BTN")
const clear=document.getElementById("clear")
const pHTML=document.querySelector("p")
const body=document.querySelector("body")

BTN.addEventListener("click",btn)

function btn() {
    clear.addEventListener("click",clearbtn)
    let input=document.getElementById("input")
    let p=document.createElement("p")
    p.innerHTML=input.value
    body.appendChild(p)
    p.addEventListener("click",pclicked)
    function pclicked(){
        p.remove()
    }
    function clearbtn(){
        body.removeChild(p)
    }
}
