const post=document.getElementById("post")
const comment=document.getElementById("comment")
const photo=document.getElementById("photo")
const album=document.getElementById("album")
const todo=document.getElementById("todo")
const user=document.getElementById("user")
const div=document.getElementById("emptField")
let string, i


post.addEventListener("click",getPost)
comment.addEventListener("click",getComment)
photo.addEventListener("click",getPhoto)
album.addEventListener("click",getAlbum)
todo.addEventListener("click",getTodo)
user.addEventListener("click",getUser)


function getPost(){
    div.innerHTML=""

    let clearbtn=document.createElement("button")
    clearbtn.innerHTML="Clear"
    clearbtn.setAttribute("class","rounded-0 btn btn-outline-danger ")
    div.appendChild(clearbtn)
    clearbtn.addEventListener("click",()=>{
        div.innerHTML=""
    })


    let ol=document.createElement("ol")
    div.appendChild(ol)
    ol.setAttribute("class","m-2")
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(resp =>{
        for(i=1;i<=resp.data.length;i++){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`)
                .then(response => {

                    let li=document.createElement("li")
                    ol.appendChild(li)

                    li.innerHTML="userId: "+response.data.userId+"<br>"+"id: "+response.data.id+"<br>"+"title: "+response.data.title+"<br>"+"body: "+response.data.body+"<hr>"
                    
                    }   
                    )}              
    })  
}
function getComment(){
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
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(resp =>{
        for(i=1;i<=resp.data.length;i++){
            axios.get(`https://jsonplaceholder.typicode.com/comments/${i}`)
                .then(response => {

                    let li=document.createElement("li")
                    ol.appendChild(li)

                    li.innerHTML="postId: "+response.data.postId+"<br>"+"id: "+response.data.id+"<br>"+"name: "+response.data.name+"<br>"+"email: "+response.data.email+"<br>"+"body: "+response.data.body+"<hr>"
                    
                    }   
                    )}              
    })  
}
function getPhoto(){
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
    ol.setAttribute("class","m-2 ms-3 me-4")

    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(resp =>{
        alert("ZƏHMƏT OLMASA ŞƏKİLLƏR YÜKLƏNƏNƏ KİMİ GÖZLƏYİN")
        for(i=1;i<=resp.data.length;i++){
            axios.get(`https://jsonplaceholder.typicode.com/photos/${i}`)
                .then(response => {

                    let dv=document.createElement("dv")
                    let li=document.createElement("li")
                    let p2=document.createElement("p")
                    dv.setAttribute("class","d-flex  justify-content-between")
                    li.setAttribute("class","pt-5 pb-5")
                    p2.setAttribute("class","pt-3 pb-3")
                    ol.appendChild(dv)
                    dv.appendChild(li)
                    dv.appendChild(p2)

                    li.innerHTML="albumId: "+response.data.albumId+"<br>"+"id: "+response.data.id+"<br>"+"title: "+response.data.title+"<br>"+"url: "+"<a target='blank' href="+response.data.url+">"+response.data.url+"<br>"
                    p2.innerHTML="<img class='justify-self-end' src="+response.data.thumbnailUrl+"<hr>"

                    let hr=document.createElement("hr")
                    hr.setAttribute("class","m-1")
                    ol.appendChild(hr)
                   
                    }   
                    )}         
                    
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
        for(i=1;i<=resp.data.length;i++){
            axios.get(`https://jsonplaceholder.typicode.com/albums/${i}`)
                .then(response => {

                    let li=document.createElement("li")
                    ol.appendChild(li)

                    li.innerHTML="userID: "+response.data.userId+"<br>"+"id: "+response.data.id+"<br>"+"title: "+response.data.title+"<br>"+"<hr>"
                    
                    }   
                    )}              
    })  
}
function getTodo(){
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
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(resp =>{
        for(i=1;i<=resp.data.length;i++){
            axios.get(`https://jsonplaceholder.typicode.com/todos/${i}`)
                .then(response => {
                    
                    let li=document.createElement("li")
                    ol.appendChild(li)
                    li.innerHTML="userID: "+response.data.userId+"<br>"+"id: "+response.data.id+"<br>"+"title: "+response.data.title+"<br>"+"completed: "+response.data.completed+"<hr>"
                    }   
                    )}              
    })  
}
function getUser(){
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
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(resp =>{
        for(i=1;i<=resp.data.length;i++){
            axios.get(`https://jsonplaceholder.typicode.com/users/${i}`)
                .then(response => {
                    let dv=document.createElement("dv")
                    let li=document.createElement("li")
                    let p2=document.createElement("p")
                    dv.setAttribute("class","ms-4 d-flex  justify-content-between")
                    li.setAttribute("class","pt-4 pb-4")
                    p2.setAttribute("class","rounded border border-primary m-4 p-3")
                    ol.appendChild(dv)
                    dv.appendChild(li)
                    dv.appendChild(p2)

                    li.innerHTML="id: "+response.data.id+"<br>"+"name:  "+response.data.name+"<br>"+"username:  "+response.data.username+"<br>"+"e-mail:  "+response.data.email+"<br>"+"address: "+"<ul type='none' class='ms-3 ps-5'"+"<li>"+"street: "+response.data.address.street+"</li>"+"<li>"+"suite: "+response.data.address.suite+"</li>"+"<li>"+"city: "+response.data.address.city+"</li>"+"<li>"+"zipcode: "+response.data.address.zipcode+"</li>"+"<li>"+"geo: "+"<ul class='ms-3 ps-5'>"+"<li>"+"lat: "+response.data.address.geo.lat+"</li>"+"<li>"+"lng: "+response.data.address.geo.lng+"</li>"
                    p2.innerHTML="phone: "+response.data.phone+"<br>"+"website: "+"<a href='response.data.website'>"+response.data.website+"</a>"+"<br>"+"company: "+"<ul>"+"<li>"+"name: "+response.data.company.name+"</li>"+"<li>"+"catchPhrase: "+response.data.company.catchPhrase+"</li>"+"<li>"+"bs: "+response.data.company.bs+"</li>"
                    
                    let hr=document.createElement("hr")
                    hr.setAttribute("class","m-1")
                    ol.appendChild(hr)
                    }   
                    )}    
    })
}
      