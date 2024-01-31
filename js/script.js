const text_value = document.querySelector(".text_value")
const btn_search = document.querySelector(".btn_search")
const main = document.querySelector(".main")
const aside = document.querySelector(".aside")


window.onload = function () {
    
    text_value.addEventListener("input", Recherche)
    // btn_search.addEventListener("click", Recherche)

}

const Recherche = async (e) => {
    e.preventDefault()

    if (text_value.value == "") {
        aside.style= 'display: none;'
        main.style= 'display: none;'
    }else {
        aside.style= 'display: flex;'
        main.style= 'display: flex;'
        try {
            const apiUrl = "https://countriesnow.space/api/v0.1/countries/positions";
            
            // Définition de l'URL de l'API en utilisant la clé d'API et la requête pour New York
            
            const response = await fetch(apiUrl);
            
            
            // Appel de l'API en utilisant l'URL et récupération de la réponse
            
            const Data = await response.json();
            
            // Conversion de la réponse en format JSON et stockage dans la variable data
            const input_text = text_value.value
            const Datas = Data.data

            
            for (let x = 0; x < Datas.length; x++) {
                const pays = Datas[x].name.toUpperCase()
                if (pays.includes(input_text.toUpperCase())) {
                    aside.innerHTML = `
                        <div class="container">
                            <p class="aside_p"><a href="#">${Datas[x].name}</a></p>
                        </div>
                    `
                    document.querySelector(".aside_p").addEventListener("click", async()=>{
                        text_value.value = Datas[x].name
                        console.log(text_value.value);
                        
                        
                        const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${text_value.value}&&appid=e5b5b2fa841bfd0541232807868d20ec&units=metric&lang=en`;
                        const response2 = await fetch(apiUrl2);
                        const Data2 = await response2.json();
                        Data2.name = Datas[x].name
                        console.log(Data2);
                        
                        if (Data2.cod == "404") {
                            aside.style= 'display: none;'
                            alert("Pays non trouver, désolé!!")
                        }
                        

                        main.innerHTML = 
                        ` 
                            <div class="container">
                                <p class="pays"><strong>Pays</strong> : <span>${Datas[x].name}</span></p>
                                <p class="meteo"><strong>Température</strong> : <span>${Data2.main.temp} °c</span></p>
                                <p class="pays"><strong>Humidité</strong> : <span>${Data2.main.humidity} %</span></p>
                                <p class="pays"><strong>Vent</strong> : <span>${Data2.wind.speed} km/h</span></p>
                                <p class="pays"><strong>description</strong> : <span>${Data2.weather[0].description}</span></p>


                            </div> 
                        `
                        aside.style= 'display: none;'
                    })
                    // console.log(Datas[x].name);
                }

                
                
            }
            
            
            main.style = "margin-top: 3%; "
        } catch (err) {
            console.log("ERREUR" + err);
            // Gestion des erreurs en cas de problème lors de l'appel de l'API
        }




            
    }

}

