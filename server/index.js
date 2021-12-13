import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'
dotenv.config();

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }))
app.use(cors());

app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('API running')
})

const PORT = process.env.PORT

mongoose.connect("mongodb+srv://gordon:gordon123@cluster0.a8rai.mongodb.net/Flashback?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));  