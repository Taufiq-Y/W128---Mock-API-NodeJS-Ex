const express = require('express');
const router = express.Router();

const data = [
    {id: 1, name: "Taufiq", role: "Instructor"},
    {id: 2, name: "Muhammed", role: "Mentor"},
    {id: 3, name: "Y", role: "Learner"}
];

router.get('/', (req, res) => {
    res.json(data)
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find((i) => i.id === id) 
    if(!item) {
        res.status(404).json({ error: "User Not found..!!"})
    } else {
        res.json(item)
    }
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.find((i) => i.id === id) 

    if (index === -1) {
        res.status(404).json({ error: "User Not Found..!!" })
    } else {
        const deleteUser = data.splice(index, 1)[0];
        res.json(deleteUser)
    }
})

router.post('/', (req, res) => {
    try {
        const newBody = {
            id: data.length + 1,
            name: req.body.name,
            role: req.body.role
        };
        console.log("req,body-->", newBody)
        data.push(newBody);
        res.status(201).json(newBody)
    } catch (error) {
        console.log("err-->", error)
    }

})

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const updatedItem = req.body
    const index = data.findIndex((i) => i.id === id)

    if(index === -1) {
        res.status(404).json({error: "Data Doesn't exists"})
    } else {
        data[index] = { ...data[index], ...updatedItem}
        res.json(data[index])
    }
})


module.exports = router;
