import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js"
import errorHandler from "./middlewares/errorHandler.js";
import assistantRoutes from "./routes/assistantRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", movieRoutes)
app.use("/api/assistant", assistantRoutes)

app.use(errorHandler)

export default app;














/*
import dotenv from "dotenv"
dotenv.config()

console.log("APP:", process.env.TMDB_API_KEY)

import express from "express";
import cors from "cors";

import movieRoutes from "./routes/movieRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", movieRoutes)


export default app;
*/

/*
//import dotenv from "dotenv"
//dotenv.config()
*/