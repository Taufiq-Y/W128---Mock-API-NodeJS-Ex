const express = require('express');
const app = express();
const itemsRouter = require("./routes/itemRoute")

//First Ever API.
// app.use('/', (req, res) => {
//     res.send("Hello World")
// })

app.use(express.json())
app.use('/api/v1/items', itemsRouter)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is up and listening to the request at ${PORT}`)
})


