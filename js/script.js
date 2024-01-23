const text_value = document.querySelector(".text_value")
const btn_search = document.querySelector(".btn_search")
const main = document.querySelector(".main")


window.onload = function () {
    btn_search.addEventListener("click", Recherche)
}

const Recherche = async (e) => {
    e.preventDefault()

    if (text_value.value == "") {
        alert("Veillez remplir ce champ svp")
    }else {
        try {
            // const apiKey = "ab8d978ca1b77f58631a1c64bba45c20";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${text_value.value}&&appid=e5b5b2fa841bfd0541232807868d20ec&units=metric&lang=fr`;
            // Définition de l'URL de l'API en utilisant la clé d'API et la requête pour New York
            
            const response = await fetch(apiUrl);
            // Appel de l'API en utilisant l'URL et récupération de la réponse
            
            const data = await response.json();
            // Conversion de la réponse en format JSON et stockage dans la variable data
            

            main.innerHTML = 
            ` 
                <div class="container">
                    <p class="continant"><strong>Initial pays / ville</strong> : <span>${data.sys.country}</span></p>
                    <p class="pays"><strong>Pays / Ville</strong> : <span>${data.name}</span></p>
                    <p class="meteo"><strong>Température</strong> : <span>${data.main.temp} °c</span></p>
                    <p class="pays"><strong>Humidité</strong> : <span>${data.main.humidity} %</span></p>
                    <p class="pays"><strong>Vent</strong> : <span>${data.wind.speed} km/h</span></p>
                    <p class="pays"><strong>description</strong> : <span>${data.weather[0].description}</span></p>


                </div> 
            `
            
            main.style = "margin-top: 3%; "
        } catch (err) {
            console.log("ERREUR" + err);
            // Gestion des erreurs en cas de problème lors de l'appel de l'API
            alert("Ce pays ou cette ville n'existe pas")
        }




            
    }

}