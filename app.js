const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

const books = [ 

    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },

    { id: 2, title: "Go Sleeping", author: "George Orwell" },
];


app.get ('/api/user/:id', (req, res) => {
   
    const id = req.params.id
    
    res.json({message: `Get a book with ${id}`,"body" : [books]})
});
    

   


// In-memory array to store book data

app.put('/api/user/:id', (req, res) => {
    const id = req.params.id
    
    
    res.json({message: `this is the book by ${id}`,"body" : [books]})
});
    


app.post('/api/user/:id', (req, res) => {
    const id = req.params.id
    
    
    res.json({message: `this is the book by ${id}`,"body" : [books]})
});
    


app.patch('/api/user/:id', (req, res) => {
    const id = req.params.id
    res.json({message: `this is the book by ${id} has been updated`})
 });
app.delete('/api/user/:id', (req, res) => {
    const id = req.params.id
    res.json({message: `this is the book by  ${id} has been deleted`})
})

app.listen (PORT, () => {
    console.log('My App is working fine')
})