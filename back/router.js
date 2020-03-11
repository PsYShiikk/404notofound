const express = require("express");
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/quiz');
const verify=require('./connectionRouter').verify; // middleware function to protect routes

module.exports = router;

router

    .get('/quizz', (req, res) => {

            db.all(
                "select * from quizzes",

                        (err, row) => {
                            res.json(row)
                        }
                    );

    })
    .get('/quizz/:id', (req, res) => {

        db.all(
            "select * from questions where quizzes_id = ?", [req.params.id],
            (err, row) => {
                res.json(row)
            }
        );
    })

    .get('/user/:username', (req, res) => {

        db.all(
            "select * from user where username = ?", [req.params.username],
            (err, row) => {
                res.json(row)
            }
        );
    })



    .use((req, res) => {
        res.status(400);
        res.json({
            error: "Bad request"
        })
    });