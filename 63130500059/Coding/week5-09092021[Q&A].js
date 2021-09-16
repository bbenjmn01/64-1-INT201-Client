class Question {
    constructor(id, question, answer) {
        this._id = id;
        this._question = (question === undefined || question.trim.length === 0) ? 'unknow' : question;
        this._answer = answer;
    }

    get id() {
        return this._id;
    }

    get question() {
        console.log('getter');
        return this._question;
    }

    get answer() {
        return this._answer;
    }

    set id(id) {
        this._id = id;
    }

    set question(question) {
        console.log('setter');
        this._question = (question === undefined || question.trim.length === 0) ? 'unknow' : question;
    }

    set answer(answer) {
        this._answer = answer;
    }

    toString() {
        return `No. ${this._id} : ${this._question}`;
    }
}

let q1 = new Question(1);
let q2 = new Question(2, `What's your name?`);
let q3 = new Question(3, '');
console.log(q1);
q2.question = 'How old are you?';
q2.question = '';
console.log(q2);
console.log(q3);
console.log(q3.question);