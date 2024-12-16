export class UI{

    
   

    constructor(data){
        this.data=data;
        this.displayGames(data);
        this.displayDetails(data);
    
    }
    
    displayGames(data){
        let sum='';
        for(var i=0; i<data.length;i++){
            sum+=`  
            <div class="col-lg-3 col-md-4 col-sm-6 shadow-lg p-3 mb-5  rounded column d-flex flex-column justify-content-evenly" data-id="${data[i].id}">
                        <div class="px-3">
                            <img src="${data[i].thumbnail}" alt="" class="w-100">
                            <div class="NameAndButton d-flex justify-content-between my-4">
                                <h5>${data[i].title}</h3>
                                    <button class="btn btn-outline-primary p-1 ">free</button>
                            </div>
                            <div class="description w-100 text-center fixedHeight">
                                <p>
                                    ${data[i].short_description}

                                </p>

                            </div>


                        </div>
                        <hr>
                        <footer class="d-flex justify-content-between align-items-end">
                            <span class="px-4 bg-dark rounded-pill">${data[i].genre} </span>
                            <span class="px-4 bg-dark rounded-pill">${data[i].platform}</span>
                        </footer>
            </div>


            
            `
        }
        document.getElementById("addInRow").innerHTML=sum;
        


    } 
    displayDetails(data){ 
        document.getElementById("DisplayDetailsRow").innerHTML=`
        <div class="col-lg-4">
                    <div class="inner">
                        <img src="${data.thumbnail}" class="rounded" alt="" width="100%">

                    </div>

                </div>
                <div class="col-lg-8">
                    <div class="inner py-3">
                        <h2>Title:${data.title}</h2>
                        <h4 class="fs-6">Category: ${data.category}</h4>
                        <h4 class="fs-6">platform: ${data.platform}</h4>
                        <h4 class="fs-6">status: ${data.status}</h4>
                        <p class="my-3"> ${data.description}
                        </p>
                       
                            <a href="${data.game_url}" class="btn btn-outline-warning text-white text-decoration-none " target="_blank">Show Game</a>
                       

                    </div>
                </div>
        
        
        `

    }






}