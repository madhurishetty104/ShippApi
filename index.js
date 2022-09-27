// const htp = require('http')

//http.createServer((req, res) => {
//res.end('Ammu')
//}).listen(4000)

const express = require('express');
const app = express()

app.use(express.json())

const items = [];


//Create a item record
app.post('/items', (req, res) => {
    try {
        const item = req.body;
        items.push(item);
        res.send(items);
    } catch (error) {
        res.send(error)
    }
})

// read item records
app.get('/items', (req, res) => {
try{
  res.send(items);
} catch (error) {
    res.send(error)
}
})

//update item record

app.put("/items/:id", (req, res) => {
    try {
        const id = req.params.id;
        const index = items.findIndex((item) => item.id == id);
        items[index] = req.body;
        res.send(items);
    } catch (error) {
        res.send(error);
    }
})

// read item record with id
app.get('/items/:id', (req, res) => {
   try{
     const item = items.find((item) => item.id == req.params.id);
     res.send(item);
   } catch (error) {
    res.send(error);
   }
})

// delete a item
app.delete("/items/:id", (req, res) => {
    try{
        const index = items.findIndex((item) => item.id == req.params.id);
        items.splice(index, 1);
        res.send("Deleted");
    } catch (error) {
        res.send(error);
    }
})

app.listen(5004, () => {
    console.log("Server is running on port 3000")
});