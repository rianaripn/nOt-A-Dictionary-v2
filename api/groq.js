const BASE_URL = "https://api.groq.com/openai/v1/chat/completions"

export default async function handler(req, res) {
    const { word, definition } = req.body
    const prompt = `
    word = ${word}
    definition = ${definition}
    You are a witty, sarcastic wordsmith. Define this word sarcastically in 1-3 sentences. Output ONLY the sarcastic DEFINITION, nothing else. 
    AND ADD AN EMOJI THAT RELATE TO THAT IN THE END OF THE SENTENCE. ONLY USE 30 WORD MAX. and i your output is ONLY follow this format : 
    [word_type] | [sarcastic definition]
    example : noun | Love is a temporary
    `
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [{ role: 'user', content: prompt }]
            })
        })
        if (!response.ok) {
            throw new Error('The AI refused to speak to you. Probably for the best🙄.')
        }
        const result = await response.json()
        return res.status(200).json({ aiResponse: result.choices[0].message.content })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
