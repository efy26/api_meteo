const text_value = document.querySelector(".text_value")
const btn_search = document.querySelector(".btn_search")
const main = document.querySelector(".main")


window.onload = function () {
    btn_search.addEventListener("click", Recherche)
}

const Recherche = async (e) => {
    e.preventDefault()

    if (text_value.value == "") {
        alert("Veillez remplir ce champ")
    }else {
        try {
            const apiKey = "ab8d978ca1b77f58631a1c64bba45c20";
            const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=NewYork`;
            // Définition de l'URL de l'API en utilisant la clé d'API et la requête pour New York
            
            const response = await fetch(apiUrl);
            // Appel de l'API en utilisant l'URL et récupération de la réponse
            
            const data = await response.json();
            // Conversion de la réponse en format JSON et stockage dans la variable data
            
            console.log(data);
            // Affichage des données obtenues dans la console
          } catch (err) {
            console.log("ERREUR");
            // Gestion des erreurs en cas de problème lors de l'appel de l'API
          }




            main.innerHTML = 
            ` 
                <div class="container">
                    <p class="continant">Continant : <span>Afrique</span></p>
                    <p class="pays">Pays : <span>${text_value.value}</span></p>
                    <p class="capital">Capital : <span>kinshasa</span></p>
                    <p class="meteo">Météo : <span>RDC</span></p>
                </div> 
            `

        main.style = "margin-top: 3%; "
    }

}