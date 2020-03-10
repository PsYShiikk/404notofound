import {useEffect, useState} from "react";
import axios from "axios";

let u1 = {
    _uid: 1,
    name: 'toto',
    passwd: '123'
}

let q1 = {
    _uid: 1,
    id:1,
    name: 'quizz1',
    icon: 'quizz1/quizz1.jpg',
    keywords: ['kitchen', 'english'],
    questions: [{
        question: 'where is brian?',
        video: null,
        txtAnswers: ["in the living room", "in the kitchen", "in the garden", "in the bathroom"],
        imgAnswers: [],
        solutions: [1, 2],
        points: 3
    }, {
        question: 'Where is Jenny, the sister of Brian?',
        video: null,
        txtAnswers: [],
        imgAnswers: ["quizz1/bathroom.jpg", "quizz1/kitchen.jpg"],
        solutions: [0],
        points: 3
    }, {
        question: 'who is brian?',
        video: null,
        txtAnswers: ["a girl", "a boy"],
        imgAnswers: [],
        solutions: [0],
        points: 1
    }],
    published: true,
    ownerId: 1,
    scores: []
}

let q2 = {
    _uid: 2,
    id:2,
    name: 'quizz2',
    icon: 'Aix/aix.jpg',
    keywords: ['Aix', 'Tourisme'],
    questions: [{
        question: 'where is Aix en Provence?',
        video: null,
        txtAnswers: ["In the north of France", "In the south of Italy", "In the south of France"],
        imgAnswers: [],
        solutions: [2],
        points: 1
    }, {
        question: 'What is the rotonde?',
        video: null,
        txtAnswers: [],
        imgAnswers: ['quizz2/granet1.jpg', 'quizz2/sauveur2.jpg', 'quizz2/aix.jpg', 'quizz2/rotonde.jpg'],
        solutions: [2, 3],
        points: 3
    }],
    published: true,
    ownerId: 1,
    scores: []
};


let quizzes = [q1, q2];
let users = [u1];
export {
    quizzes,
    users
};




