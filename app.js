const URL = "https://rickandmortyapi.com/api/character";

const cardContainer = document.getElementById("cardContainer");

window.addEventListener("DOMContentLoaded",getApi);

document.addEventListener('keyup', e=>{

    if (e.target.matches("#seeker")) {
        
        document.querySelectorAll(".card").forEach(cards =>{

            cards.textContent.toLowerCase().includes(e.target.value)
            ?cards.classList.remove("filtro")
            :cards.classList.add("filtro")
        })
    }

});

function getApi() {
    fetch(URL)
    .then (responce => responce.json())
    .then (data => data["results"].map(result => {

        const div = document.createElement("div");
        div.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src",result["image"]);
        img.classList.add = "img";

        const name = document.createElement("h2");
        name.textContent = result["name"];
        name.classList.add("name");
        
        const gender = document.createElement("p")
        gender.textContent = result["gender"];
        gender.classList.add("gender");

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(gender);
        div.classList.add("card");
        cardContainer.appendChild(div);
        // cardContainer.classList.add("container");


    }))
}   

// function seeker(e) {
   
// }