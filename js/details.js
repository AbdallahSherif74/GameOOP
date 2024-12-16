import { Games } from "./games.js";
import { UI } from "./UI.js";

export class Details {
    firstSecElement = document.getElementById("firstSec");
    LastSec= document.getElementById("details");
    loader= document.querySelector(".Loader");
    constructor(id) {
        this.id = id;
        
        document.getElementById("X_btn").addEventListener("click", function(){
            document.getElementById("firstSec").classList.remove("d-none");
            document.getElementById("details").classList.add("d-none");
            new Games("MMORPG");
        })
        
        this.classesFixed();
        this.showdetails();
    }

    classesFixed() {
            this.firstSecElement.classList.add("d-none");
            this.LastSec.classList.remove("d-none");
      
    }

    async showdetails() {
        document.querySelector(".Loader").classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '201f55ba06msh4f377c2c16e111bp159809jsn1d688f700ef7',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options);
        const response = await api.json();
        document.querySelector(".Loader").classList.add("d-none");
        console.log(response)
        this.ui = new UI(response);
    }

    closedetails(){
        const firstSecElement = document.getElementById("firstSec");
        const LastSec= document.getElementById("details");
            firstSecElement.classList.remove("d-none");
            LastSec.classList.add("d-none");
        
    }
}
