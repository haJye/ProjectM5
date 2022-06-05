const express = require("express")
const { CreateUser, DeleteUser } = require("../controllers/userController.js")
const { getAllUsers } = require("../controllers/userController.js")


const router = express.Router()


router.get("/",(req,res)=>{
    res.send("Hello")
})
// router.delete('/',(req,res)=>{
//     res.send("hello")
// })
router.get('/admin',getAllUsers)
router.post('/register',CreateUser)
router.delete('/admin/:id',DeleteUser)

module.exports = router