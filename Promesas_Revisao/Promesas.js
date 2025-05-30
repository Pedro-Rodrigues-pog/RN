

//-----------------------------------------------------------------------------------------------------------
 const promesa = new Promise((resolvida,rejeitada) =>{
    let nome ='Paulo';

    if(nome == 'Paulo'){
     resolvida('Promesa Resolvida')
    }
    else{
     rejeitada('Promesa Rejeitada')
    }
 })

  promesa.then((data) =>{//Executra quando a promessa for cumprida
    console.log(data);
 }).catch((error) => {//Executa o rejeitada quando a promessa for rejeitada
    console.error(error);
 })