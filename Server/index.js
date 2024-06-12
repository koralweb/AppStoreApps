import express from 'express'
import getAppleIds from "./routes/getAppleIds.js";

const app = express()

const PORT = 1907

app.use('/getAppleIds', getAppleIds)

async function start() {
    try {
        // const url = `mongodb+srv://fortavey:CaHaLviff6_@cluster0.yqq6h5w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        // await mongoose.connect(url)
        app.listen(PORT, () => {
            console.log('Server is running on port ' + PORT)
        })
    } catch (err) {
        console.log(err)
    }
}

start()



