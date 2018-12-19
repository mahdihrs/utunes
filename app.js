const express = require('express')
const app = express()
const port = 3000
// const teacher = require('./routes/teacher.js') //route teacher
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

// app.use('/teacher', teacher)

app.get('/', (req, res) => {
    res.render('./pages/homepage/homepage')
})

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})