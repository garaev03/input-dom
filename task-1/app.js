const BTN=document.getElementById("BTN")
const body=document.querySelector("body")
const mode=document.getElementById("mode")
const input=document.getElementById("input")
const box=document.getElementById("box")  
const buttons=document.getElementById("buttons")   

let count=0,clicked=2

BTN.addEventListener("click", btn)

function newbye(){
mode.innerHTML="<i style='color: white;'  class='icon fa-solid fa-moon'></i> "
BTN.setAttribute("class","rounded-0 btn btn-success btn-sm me-3")
}

mode.addEventListener('click',changeMode)

function changeMode(){
    body.classList.toggle('darkmode')
    if(body.className=="darkmode"){
        newbye()
    }
    else{
        BTN.setAttribute("class","rounded-0 btn btn-outline-success btn-sm me-3")
        mode.innerHTML="<i class='icon fa-solid fa-moon'></i> "
    }
}

function btn() {
    if(input.value==""){
        alert("İNPUT is empty!")
    }
    else {
        if(count==0){
        const  button=document.createElement("button")
        button.setAttribute("class","rounded-0 btn btn-outline-danger btn-sm")
        button.style.width="82px"
        button.innerHTML="Clear!"
        buttons.appendChild(button) 
        count++
        button.addEventListener("click",() =>{
            box.innerHTML=""
        })
    }
    }
    let p=document.createElement("p")
    p.innerHTML+=input.value
    p.setAttribute("class","ptag")
    box.appendChild(p)
    p.addEventListener("click",pclicked)
    input.value=""
    function pclicked(){
        p.remove()
    
}
}

    
