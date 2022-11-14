const post=document.getElementById("post")
const comment=document.getElementById("comment")
const photo=document.getElementById("photo")
const album=document.getElementById("album")
const todo=document.getElementById("todo")
const user=document.getElementById("user")
const div=document.getElementById("emptField")

var string, i, response

post.addEventListener("click",getPost)
comment.addEventListener("click",getComment) 
photo.addEventListener("click",getPhoto)
album.addEventListener("click",getAlbum)
todo.addEventListener("click",getTodo)
user.addEventListener("click",getUser)

function clearBTN(){
let clearbtn=document.createElement("button")
clearbtn.innerHTML="Clear"
clearbtn.setAttribute("class","rounded-0 btn btn-outline-danger")
div.appendChild(clearbtn)
clearbtn.addEventListener("click",()=>{
    div.innerHTML=""
})
}

function getPost(){
    div.innerHTML=""

    clearBTN()

    let ol=document.createElement("ol")
    div.appendChild(ol)
    ol.setAttribute("class","m-2")
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(resp =>{
        for(i=1;i<=resp.data.length-1;i++){
                    response=resp.data[i]
                    let li=document.createElement("li")
                    ol.appendChild(li)
                    li.innerHTML="userId: "+response.userId+"<br>"+"id: "+response.id+"<br>"+"title: "+response.title+"<br>"+"body: "+response.body+"<hr>"  
                    }   
                                  
    })  
}
function getComment(){
    div.innerHTML=""

    clearBTN()

    let ol=document.createElement("ol")
    div.appendChild(ol)
    ol.setAttribute("class","m-2")
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(resp =>{
        for(i=1;i<=resp.data.length-1;i++){
                    response=resp.data[i]
                    let li=document.createElement("li")
                    ol.appendChild(li)
                    li.innerHTML="postId: "+response.postId+"<br>"+"id: "+response.id+"<br>"+"name: "+response.name+"<br>"+"email: "+response.email+"<br>"+"body: "+response.body+"<hr>"                    
                    }   
                    })                   
}
function getPhoto(){
    div.innerHTML=""

    clearBTN()

    let ol=document.createElement("ol")
    div.appendChild(ol)
    ol.setAttribute("class","m-2 ms-3 me-4")

    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(resp =>{
        alert("ZƏHMƏT OLMASA ŞƏKİLLƏR YÜKLƏNƏNƏ KİMİ GÖZLƏYİN")
        for(i=1;i<=resp.data.length;i++){
                    response=resp.data[i]
                    let dv=document.createElement("div")
                    let li=document.createElement("li")
                    let p2=document.createElement("p")
                    dv.setAttribute("class","d-flex  justify-content-between")
                    li.setAttribute("class","pt-5 pb-5")
                    p2.setAttribute("class","pt-3 pb-3")
                    ol.appendChild(dv)
                    dv.appendChild(li)
                    dv.appendChild(p2)

                    li.innerHTML="albumId: "+response.albumId+"<br>"+"id: "+response.id+"<br>"+"title: "+response.title+"<br>"+"url: "+"<a target='blank' href="+response.url+">"+response.url+"<br>"
                    p2.innerHTML="<img class='justify-self-end' src="+response.thumbnailUrl+"<hr>"

                    let hr=document.createElement("hr")
                    hr.setAttribute("class","m-1")
                    ol.appendChild(hr)
                   
                    }            
    })  
}
function getAlbum(){
    div.innerHTML=""

    let clearbtn=document.createElement("button")
    clearbtn.innerHTML="Clear"
    clearbtn.setAttribute("class","rounded-0 btn btn-outline-danger")
    div.appendChild(clearbtn)
    clearbtn.addEventListener("click",()=>{
        div.innerHTML=""
    })

    let ol=document.createElement("ol")
    div.appendChild(ol)
    ol.setAttribute("class","m-2")
    axios.get("https://jsonplaceholder.typicode.com/albums")
    .then(resp =>{
        for(i=1;i<=resp.data.length-1;i++){
            response=resp.data[i]
            let li=document.createElement("li")
            ol.appendChild(li)

            li.innerHTML="userID: "+response.userId+"<br>"+"id: "+response.id+"<br>"+"title: "+response.title+"<br>"+"<hr>"
                    
        }                         
    })  
}
function getTodo(){
    div.innerHTML=""

    clearBTN()

    let ol=document.createElement("ol")
    div.appendChild(ol)
    ol.setAttribute("class","m-2")
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(resp =>{
        for(i=1;i<=resp.data.length-1;i++){
            response=resp.data[i]
            let li=document.createElement("li")
            ol.appendChild(li)
            li.innerHTML="userID: "+response.userId+"<br>"+"id: "+response.id+"<br>"+"title: "+response.title+"<br>"+"completed: "+response.completed+"<hr>"
            }                
    })  
}
function getUser(){
    div.innerHTML=""
    clearBTN()
    let ol=document.createElement("ol")
    div.appendChild(ol)
    ol.setAttribute("class","m-2")
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(resp =>{
        for(i=1;i<=resp.data.length-1;i++){
            response=resp.data[i]
            let dv=document.createElement("div")
            let li=document.createElement("li")
            let p2=document.createElement("p")
            dv.setAttribute("class","ms-4 d-flex  justify-content-between")
            li.setAttribute("class","pt-4 pb-4")
            p2.setAttribute("class","rounded border border-primary m-4 p-3")
            ol.appendChild(dv)
            dv.appendChild(li)
            dv.appendChild(p2)
            li.innerHTML="id: "+response.id+"<br>"+"name:  "+response.name+"<br>"+"username:  "+response.username+"<br>"+"e-mail:  "+response.email+"<br>"+"address: "+"<ul type='none' class='ms-3 ps-5'"+"<li>"+"street: "+response.address.street+"</li>"+"<li>"+"suite: "+response.address.suite+"</li>"+"<li>"+"city: "+response.address.city+"</li>"+"<li>"+"zipcode: "+response.address.zipcode+"</li>"+"<li>"+"geo: "+"<ul class='ms-3 ps-5'>"+"<li>"+"lat: "+response.address.geo.lat+"</li>"+"<li>"+"lng: "+response.address.geo.lng+"</li>"
            p2.innerHTML="phone: "+response.phone+"<br>"+"website: "+"<a href='response.website'>"+response.website+"</a>"+"<br>"+"company: "+"<ul>"+"<li>"+"name: "+response.company.name+"</li>"+"<li>"+"catchPhrase: "+response.company.catchPhrase+"</li>"+"<li>"+"bs: "+response.company.bs+"</li>"
            
            let hr=document.createElement("hr")
            hr.setAttribute("class","m-1")
            ol.appendChild(hr)
        }   
    })
}
      