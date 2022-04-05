
const express = require('express');
const app = express();
const PORT = process.env.port||4000;

const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sample'
})
db.connect();

app.get('/api/get', (req, res)=>{
    
    db.query("SELECT * FROM sample.user;", (err, result)=>{
        res.send(result);
    })
});
app.post('/api/users', (req, res)=>{
    const id = req.body.id;
    const userId= req.body.userId;
    const userPwd= req.body.userPwd;
    
    db.query("INSERT INTO sample.user (id, userId, userPwd) VALUES(?,?,?)", [id, userId, userPwd],
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            console.log('success');
        }
    }
    )
});
app.put("/update", (req, res)=>{
    const id = req.body.id;
    const userPwd = req.body.userPwd;
    db.query(
        "UPDATE sample.user SET userPwd = ? WHERE id = ?", [userPwd, id], (err, result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
    )
})
app.delete("/delete/:id", (req, res)=>{
    const id= req.params.id;
    db.query("DELETE FROM sample.user WHERE id =?", id, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});
app.listen(PORT, ()=>{
    console.log(`Server run port at ${PORT}`);
});