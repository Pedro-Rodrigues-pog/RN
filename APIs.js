const host = 'https://dattebayo-api.onrender.com';

fetch(`${host}/characters`, {
    method: 'GET',
    headers:{
        Accept:'application/json'
    }
}).then((response) => {
    return response.json();
}).then((data) =>{
    characters = data.characters[0].jutsu;
    imagen = data.characters[0].images;
    
    /*console.log(imagen[0]);
    let i = 0;
    while(i < characters[0].length){ 
        console.log(characters[i].toUpperCase());
        i++;
    }*/
   
     console.log(data.characters);
   
   let j = 0;
   for(j; j < characters[j].length; j++){
    ids = data.characters[j].id;
    console.log(ids);
   }
}).catch((error) => {
    console.log(error);
})