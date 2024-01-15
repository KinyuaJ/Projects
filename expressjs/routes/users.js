const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('users list')
})

router.get('/new', (req,res)=>{
    res.send('New user form list')
})
router.post('/', (req,res)=>{
    res.send('Create user')
 })
router
.route('/:id')
.get((req,res)=>{
    res.send(`Get user with id ${req.params.id}`)
 })
 .put((req,res)=>{
    res.send(`update user with id ${rew.params.id}`)
 })
 .delete((req,res)=>{
    res.send(`delete user with id ${req.params.id}`)
 })

//  router.get("/:id", (req,res)=>{
//     res.send(`Get user with id ${req.params.id}`)
//  })

//  router.put('/:id', (req,res)=>{
//     res.send(`update user with id ${rew.params.id}`)
//  })
//  router.delete('/:id', (req,res)=>{
//     res.send(`delete user with id ${req.params.id}`)
//  })
 
module.exports = router;