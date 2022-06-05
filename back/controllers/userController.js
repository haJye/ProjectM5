
const con= require("../db.js")


const getAllUsers = (req, res) => {

    con.query("select * from users",(error,data)=>{ 
       if(!error){
           res.json(data)
           return 
       }
       res.send("xeta bash verdi")
    })
}

const CreateUser = (req, res) => {
    const { username, password, email} = req.body
    const sql = `insert into users(username,password,email)
                values ("${username}","${password}","${email}");`
    con.query(sql, (error) => {
        if (!error) {
            return con.query('select * from users', (error, data) => {
                if (!error) {
                    res.status(200).json(data)
                    return
                }
                res.status(401).send("Xeta bash verdi")
            })

        }
        res.send("xeta bash verdi")
    })
}
const DeleteUser = (req,res)=>{ 
    console.log(req.params)
    const sql =`
       delete from users where id=${req.params.id};
    `
     con.query(sql,(errr)=>{
         if(!errr){
            return  con.query('select * from users',(err,data)=>{
               if(!err){
                return res.json(data)
               }
               res.send("error bash verdi")
             })
         }
         res.send("xeta bash verdi")
     })
 
 }

module.exports={
    getAllUsers,
    CreateUser,
    DeleteUser,
}