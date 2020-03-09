DROP TABLE IF EXISTS quizzes;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;

PRAGMA foreign_keys = ON;


CREATE TABLE quizzes (
   id INTEGER NOT NULL PRIMARY KEY,
   name TEXT,
   picture_url TEXT,
   keywords TEXT
);

CREATE TABLE questions (
   id INTEGER NOT NULL PRIMARY KEY,
   sentence TEXT NOT NULL,
   video_url TEXT,
   score INTEGER,
   quizzes_id INTEGER REFERENCES quizzes(id)
);

CREATE TABLE answers (
   id INTEGER NOT NULL PRIMARY KEY,
   sentence TEXT,
   picture_url TEXT check((sentence IS NULL AND picture_url IS NOT NULL) OR (sentence IS NOT NULL AND picture_url IS NULL)),
   solution INTEGER check(solution in (0,1)),
   questions_id INTEGER REFERENCES questions(id)
);

INSERT INTO quizzes (name,picture_url,keywords)
VALUES
   ("quizz1", "Aix/aix.jpg", "brian;people"),
   ("quizz2", "Aix/aix.jpg", "toto;people");

INSERT INTO questions (sentence, score, quizzes_id)
VALUES
   ("where is brian?", 3, 1),
   ("where is brian?", 3, 1),
   ("who is brian?", 1, 1),
   ("where is toto?", 3, 2),
   ("who is toto?", 1, 2);

INSERT INTO answers (sentence, picture_url, solution, questions_id)
VALUES
   ("in the living room", NULL, 0, 1),
   ("in the kitchen", NULL, 1, 1),
   ("in the garden", NULL, 1, 1),
   ("in the bathroom", NULL, 0, 1),
   (NULL, "Aix/euroNight1.jpg", 0, 2),
   (NULL, "Aix/festival1.jpg", 1, 2),
   (NULL, "Aix/granet1.jpg", 1, 2),
   ("a boy", NULL, 1, 3),
   ("a girl", NULL, 0, 3),
   ("in the living room", NULL, 0, 4),
   ("in the kitchen", NULL, 1, 4),
   ("in the garden", NULL, 0, 4),
   ("in the bathroom", NULL, 0, 4),
   ("a boy", NULL, 1, 5),
   ("a girl", NULL, 0, 5);
