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
    icon: 'Boulogne/centre.jpg',
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



let q3 = {
    _uid: 3,
    id:3,
    name: 'quizz3',
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

let q4 = {
    _uid: 4,
    id:4,
    name: 'quizz4',
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

let q5 = {
    _uid: 5,
    id:5,
    name: 'quizz5',
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

let q6 = {
    _uid: 6,
    id:6,
    name: 'quizz6',
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


let q7 = {
    _uid: 7,
    id:7,
    name: 'quizz7',
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

let q8 = {
    _uid: 8,
    id:8,
    name: 'quizz8',
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


let q9 = {
    _uid: 9,
    id:9,
    name: 'quizz9',
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


let quizzes = [q1, q2, q3, q4, q5, q6, q7, q8, q9];
let users = [u1];
export {
    quizzes,
    users
};




