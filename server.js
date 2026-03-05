import express from 'express'
import mongoose from 'mongoose'
import router from './router/router.js'

const app = express()
const db_URL = 'mongodb+srv://keepa3003:pLxYSuyPf8F2bcS@sport.hvizshn.mongodb.net/?appName=Sport'
const PORT = 4000


app.use(express.json())
app.use("/api", router)

async function startProject(){
    try{
        await mongoose.connect(db_URL)
        app.listen(PORT, () => {
            console.log(`server work on http://localhost:${PORT}`);
        })
    }catch(e){
        throw new Error(e)
    }
}
startProject()