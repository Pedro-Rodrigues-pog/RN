const API_HOST = 'https://dattebayo-api.onrender.com'

export async function fetchcharacters() {//async-> pode levar um tempo(determinado tempo) para funcionar (função assincrona)
    try {
        const response = await fetch(`${API_HOST}/characters`)//fetch(retorna um objeto), await-> espera o processamemto da api

        //Verificação da resposta
        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`)
        }

        return await response.json()// Espera o return se concluir 
    } catch(error) {//Erro se a verificação der errado
        console.error(error)
        return []
    }
}