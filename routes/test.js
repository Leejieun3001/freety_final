/*const express = require('express');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const mysql = require('mysql');
const router = express.Router();
aws.config.loadFromPath('../config/aws_config.json');
const pool = require('../config/db_pool');
const s3 = new aws.S3();

router.get('/', function(req, res) {
    pool.getConnection(function(err, connection) {
        if (err) console.log("getConnection err :", err);
        else {
            let query = 'select * from firsttest';
            connection.query(query, function(err, datas) {
                if (err) console.log("selecting query err : ", err);
                else res.status(200).send({
                    message: "ok",
                    datas: datas
                });
                connection.release();
            });
        }
    });
});*/
/*
router.get('/', aync function(req,res){
  try {
    var connection = await pool.getConnection();
    let query = 'select * from firsttest';
    let data = await connection.query(query);
    res.status(200).send({firsttest : data});
  }
  catch(err){
    res.status(500).send({message : 'error'+err});
  }
  finally {
    pool.releaseConnection(connection);
  }

});





module.exports = router;*/
