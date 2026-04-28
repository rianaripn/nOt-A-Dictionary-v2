const BASE_URL = "https://api.api-ninjas.com/v1/dictionary"

export default async function handler(req,res){
    const searchedWordApi = req.query.word;
    const url = `${BASE_URL}?word=${searchedWordApi}`
    try{
        const response = await fetch (url, {
            method : 'GET',
            headers : {
                'X-Api-Key' : process.env.DICTIONARY_API_KEY
            }
        })
        if(!response.ok){
            throw new Error('Something broke, Naturally')
        }
        const data = await response.json()
        return res.status(200).json(data)
    } catch (err){
        res.status(500).json({
            error : err.message
        }) 
    }
}