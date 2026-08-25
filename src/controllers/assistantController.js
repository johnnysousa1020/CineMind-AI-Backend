import { askGemini } from "../services/geminiService.js";
import { searchMedia } from "../services/tmdbService.js";

export async function chat(req, res) {
    try{
        const { message, messages = [] } = req.body;

        if(!message){
            return res.status(400).json({
                error: "Mensagem é obrigatório."
            })
        }

        const result = await askGemini(
            message,
            messages
        )

        const recommendations = [];

        if(result.recommendations){
            for (const item of result.recommendations)
            {
                const results = await searchMedia(item.title)

                const media = results.find(
                    movie => movie.media_type === item.type
                )

                if(media){
                    recommendations.push(media)
                }
            }
        }

        return res.json({
            answer: result.answer,
            recommendations
        })
    }catch(error){
        console.error(error)

        return res.status(500).json({
            error: "Erro ao conversar com a IA."
        })
    }
}