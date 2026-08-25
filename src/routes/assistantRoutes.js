import express from "express"
import { chat } from "../controllers/assistantController.js"

const router = express.Router()

router.post("/chat", chat)

export default router










/*
const answer = await askGemini(message)








import express from "express"
import { askGemini } from "../services/geminiService.js"
import { searchMedia } from "../services/tmdbService.js"

const router = express.Router()

router.post("/chat", async (req, res) => {
    try{
        const { message } = req.body

        if(!message){
            return res.status(400).json({
                error: "Mensagem é obrigatório."
            })
        }

        const result = await askGemini(message)

        const recommendations = [];

        for (const item of result.recommendations){
            const results = await searchMedia(item.title)

            const media = results.find(
                movie => movie.media_type === item.type
            )

            if (media){
                recommendations.push(media)
            }
        }


        res.json({
            answer: result.answer,
            recommendations
        })
    }catch(error){
        console.error(error)

        res.status(500).json({
            error: "Erro ao conversar com a IA."
        })
    }
})

export default router
*/