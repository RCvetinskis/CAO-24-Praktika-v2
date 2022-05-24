" use strict"
const BASE_URL = "https://robust-safe-crafter.glitch.me/"
const form = document.querySelector("form")
const image = document.getElementById("image")
const price = document.getElementById("price")
const description = document.getElementById("description")
const city = document.getElementById("city")


form.addEventListener("submit",function(e){
    e.preventDefault()
    if(!image.value || !city.value || !price.value || !description.value){
        return alert("Uzpildykite visus langelius")
    }
    let data ={
        image: image.value,
        city: city.value,
        price: price.value,
        description: description.value
    }
    
    fetch(BASE_URL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then( result=>{alert(result.msg),
        location.href = "index.html"
    } 
    )
    .catch(e=>console.log(e))

})
