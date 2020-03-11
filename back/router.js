const express = require("express");
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/quiz');

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
            "select * from quizzes where id = ?", [req.params.id],
            (err, row) => {
                res.json(row)
            }
        );
    })

    .get('/quizz/jouer/:id', (req, res) => {

        db.all(
            "select * from questions where quizzes_id = ? ", [req.params.id],
            (err, row) => {
                res.json(row)
            }
        );
    })

    .get('/quizz/reponse/:id', (req, res) => {

        db.all(
            "select * from answers where questions_id = ? ", [req.params.id],
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