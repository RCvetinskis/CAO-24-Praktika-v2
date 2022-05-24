"use strict"
// BASE URL = https://robust-safe-crafter.glitch.me/

const BASE_URL = "https://robust-safe-crafter.glitch.me/"
const cards = document.querySelector(".cards")
const buttons   = document.querySelectorAll(".city-btn")


function getUrl(){
   return fetch(BASE_URL).then(resp=> resp.json())
 
}
function loadCards(data){
    if(!data) return
    cards.innerHTML =""
    data.map(x=>{
        let newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.innerHTML =
        `
        <img src="${x.image}" alt="${x.city}">
        <div class="text">
          <h3 class="price">€${x.price} </h3>
          <p class="city">${x.city}</p>
          <p class="description">${x.description}</p>
        </div>
      </div>
        
        
        `
        cards.append(newCard)
    })
    // Perduoda data sekancia then funkcija (filterdata)
    return data

   
}

function filterData(data){
    for(var x of buttons){
        x.addEventListener("click",function(){
            for(var y of buttons){
                y.classList.remove("active")
            }
            this.classList.add("active")
           //filter data

           if(this.innerText !="All"){
               var filter = data.filter(x=> x.city === this.innerText)
               loadCards(filter)
           }else{
               loadCards(data)
           }
        })
    }
}
getUrl()
.then(loadCards)
.then(filterData)
.catch(e =>console.log(e))