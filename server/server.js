const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const PORT = process.env.PORT || 4000;
const app = express();
const db = require('./config/db');

app.use(cors());
app.use(bodyParser.json());

app.get('/dbDataSend', (req, res)=>{
  db.getConnection(function(err, conn){
    if(!err){
      console.log("DB connect");
      conn.query("SELECT * FROM test1", (err, data)=>{
        if(!err){
          res.send({dbData: data});
        }else{
          res.send({dbData: err});
        }
      })
    }else{
      console.log("DZB Connect Error = " + err);
    }
  })
})
app.listen(PORT, ()=>{
  console.log(`Server on: http://localhost:${PORT}/`);
})