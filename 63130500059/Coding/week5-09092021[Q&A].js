class Question {
  constructor(id, question, answer, correct) {
    this._id = id;
    this._question =
      question == undefined || question.length == 0 ? "unknow" : question;
    this._answer = answer;
    this._correct = correct;
  }

  get id() {
    return this._id;
  }

  get question() {
    console.log("getter");
    return this._question;
  }

  get answer() {
    return this._answer;
  }

  set id(id) {
    this._id = id;
  }

  set question(question) {
    console.log("setter");
    this._question =
      question === undefined || question.trim.length === 0
        ? "unknow"
        : question;
  }

  set answer(answer) {
    this._answer = answer;
  }

  toString() {
    return `No. ${this._id} : ${this._question}`;
  }
}

let q1 = new Question(1);
let q2 = new Question(2, "How old are you?", ["1", "2", "3", "4"]);
let q3 = new Question(3, "");
console.log(q1.toString());
// q2.question = 'How old are you?';
// q2.question = '';
console.log(q2.toString());
console.log(q3.toString());
