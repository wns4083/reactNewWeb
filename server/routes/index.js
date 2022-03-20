const express = require('express');
const router = express();
const db = require('../config/db');

router.get('/test', (req, res)=>{
    res.send({test: "this is test!!"});
    //http://localhost:3001으로 접속 시 응답 메시지 출력
})
module.export = router;