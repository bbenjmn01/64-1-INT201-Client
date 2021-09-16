//#1 independent variables, all are array
let ids = [1, 2];
let quests = ["what is your name?", "where are you?"];
let answers = ["Umaporn", "at home"];

//#2 array of objects, easy iterate all items under a single variable
let quest3 = [
    { id: 1, question: "What is your name?", answer: "Umaporn" },
    { id: 2, question: "Where are you?", answer: "at home" },
];

//#3 one object, each property stores with array
let quest4 = {
    ids: [1, 2],
    quests: ["what is your name?", "where are you?"],
    answers: ["Umaporn", "at home"],
};

const quest1 = {
    id: 1,
    question: "What is your name?",
};

delete quest1.question;
console.log(quest1);
quest1.questions = "What is your name?";
console.log(quest1);


class Question {​
    constructor(id, question) {​
        this._id = id;
        if (question === undefined || question.length === 0)
            this._question = 'unknown';
        elsethis._question = question;
    }​
    getid() {​
        returnthis._id;
    }​
    setid(id) {​
        this._id = id;
    }​
    getquestion() {​
        returnthis_question;
    }​
    setquestion(question) {​
        this._question = question;
    }​
    displayQuestion() {​
        return `id: ${​this._id}​, question: ${​this._question}​ }​`;
    }​
}​
letquest1 = newQuestion(1, 'Q1');
letquest2 = newQuestion(2, 'Q22');
Question.prototype.getQuestLength = function() {​
    returnthis._question.length;
}​;
console.log(quest1.getQuestLength());
console.log(quest2.getQuestLength());