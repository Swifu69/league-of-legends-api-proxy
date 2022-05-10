const express = require("express")

const app = express()

const PORT = 5000

app.use('/api/summmoners', require('./routes/summoners.js'))

app.use((req, res)=>{
    res.status(404).json({
        message: "Route not found"
    })
})

app.listen(PORT, () => {
    console.log('SERVER RUNNING ON PORT: ' + PORT)
})