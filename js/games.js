import { UI } from "./UI.js"
import {Details} from"./details.js"
export class Games {


    constructor(category) {
        this.fetchAPI(category)
        document.querySelectorAll(".menu a").forEach((anchor) => {
            anchor.addEventListener("click", (e) => {
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.fetchAPI(e.target.dataset.category);
            });
        });
       

    }
    
    async fetchAPI(category) {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '201f55ba06msh4f377c2c16e111bp159809jsn1d688f700ef7',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const response = await api.json();
        
        console.log(response); 
        this.ui=new UI (response);
        this.displayDetails();

    }

    displayDetails(){
        var length=document.querySelectorAll(".column");
        length.forEach((card)=>{
            card.addEventListener("click",(e)=>{
                const id= card.dataset.id;
                this.derailsObj=new Details(id);
            })
        }
    )        
        
        
    }




}