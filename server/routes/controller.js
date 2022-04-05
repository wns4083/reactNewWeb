const express = require('express');
const router = express();

router.get('/test', (req, res)=>{
    res.send({test: "it is test!!"});
})

module.exports = router;