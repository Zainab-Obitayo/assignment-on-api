const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

const books = [ 

    { "id": "1", "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },

    { "id": "2", "title": "1984", "author": "George Orwell" },
]



app.use(bodyParser.json())





app.post ('/api/user/:id', (req, res) => {
   
    const id = req.params.id
    res.json({message: `Get a book ${books}`})
    console.log("This is my post api")
    

   
})

// In-memory array to store book data

app.get('/api/user/:id', (req, res) => {
    
    
    res.json({message: `this is the book by ${books}`})
    console.log(books)
})

app.patch('/api/user/:id', (req, res) => {
    const id = req.params.id
    res.json({message: `this is the book by 'books:' ${books} has been updated`})
})
app.delete('/api/user/:id', (req, res) => {
    const id = req.params.id
    res.json({message: `this is the book by  ${books} has been deleted`})
})
app.listen(PORT, () => {
    console.log('My App is working fine')
})