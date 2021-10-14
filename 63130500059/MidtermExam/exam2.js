//63130500059
//2.1
class Students {
  constructor(profile, semester, eduCond) {
    this._profile = profile;
    this._semester = semester;
    this._eduCond = eduCond;
    this._GPAX = calGPAX();
  }
}
// เปลี่ยนจากใช้ class Students เก็บประวัติเป็น class Profiles เพื่อสื่อให้เห็นความหมายที่ชัดเจน
// และใช้ class Students เก็บข้อมูลการศึกษาแทน
class Profiles {
  constructor(stdCode, thPrefix, thFname, thLname, enFname, enLname, enPrefix) {
    this._stdCode = stdCode;
    this._thPrefix = thPrefix;
    this._thFname = thFname;
    this._thLname = thLname;
    this._enPrefix = enPrefix;
    this._enFname = enFname;
    this._enLname = enLnam;
  }
  toString() {
    return `${this._stdCode} ${this._thPrefix}${this._thFname} ${this._thLname} (${this._enPrefix} ${this._enFname} ${this._enLname})`;
  }
}
//ใช้ในการสร้างข้อมูลแต่ละเทอม
class Semesters {
  constructor(semester) {
    this._semester = semester;
  }
}
//ใช้สร้างวิชาที่ลงทะเบียนเรียน
class Subjects {
  constructor(subjectId, subjectName, credit, grade) {
    this._subjectId = subjectId;
    this._subjectName = subjectName;
    this._credit = credit;
    this._grade = grade;
  }
}
//2.8
// สภาพทางการศึกษา
// เปลี่ยนจากการเก็บแบบ array เป็น object เพราะเข้าถึงข้อมูลได้ง่าย สะดวกกว่า ไม่ซับซ้อน
const eduCond = {
  NORMAL: "GPAX.ไม่ต่ำกว่า 2.00",
  PROBATION: "GPAX. ต่ำกว่า 2.00",
  RETIRED: "GPAX. ต่ำกว่าที่เกณฑ์กำหนด",
};
// const eduCond = [
//   { status: "Normal", meaning: "GPAX. ไม่ต่ำกว่า 2.00" },
//   { status: "Probation", meaning: "GPAX. ต่ำกว่า 2.00" },
//   { status: "Retired", meaning: "GPAX. ต่ำกว่าที่เกณฑ์กำหนด" },
// ];

// ตัด meaning ออก เพราะใชที่ที่นี้ไม่ได้ใช้คำนวณ
let a = { grade: "A", value: 4 };
let bplus = { grade: "B+", value: 3.5 };
let b = { grade: "B", value: 3 };
let cplus = { grade: "C+", value: 2.5 };
let c = { grade: "C", value: 2 };
let dplus = { grade: "D+", value: 1.5 };
let d = { grade: "D", value: 1 };
let f = { grade: "F", value: 0 };
let fa = { grade: "Fa", value: 0 };
let fe = { grade: "Fe", value: 0 };
// เปลี่ยนเป็น Object เพราะเข้าถึงผ่าน key ได้เลย
const grades = { a, bplus, b, cplus, c, dplus, d, f, fa, fe };

function operator(student, semester, fn) {
  return fn(student, semester);
}

//2.5
function calGPA(student, semester) {
  let sum;
  for (let i = 0; i < student.semester[semester].length; i++) {
    sum += student.semester[i]._credit * student.semester[i].grade;
  }
  return sum / calCredit(student, semester);
}

//2.6
function calGPAX(student) {
  let result;
  for (let i = 0; i < student.semester.length; i++) {
    for (let j = 0; j < student.semester[i].length; i++) {
      result += student.semester[i][j]._credit * student.semester[i][j].grade;
    }
  }
  return result / calAllCredit(student);
}

//2.2
function calCredit(student, semester) {
  let sum;
  for (let i = 0; i < student.semester[semester].length; i++) {
    sum += student.semester[i]._credit;
  }
  return sum;
}
function calAllCredit(student) {
  let sum;
  for (let i = 0; i < student.semester.length; i++) {
    for (let j = 0; j < student.semester[i].length; i++) {
      sum += student.semester[i][j]._credit;
    }
  }
  return sum;
}

let p1 = new Profiles(
  "63130500059",
  "นาย",
  "ธิติ",
  "อึ๊งเจริญ",
  "Mr.",
  "Thiti",
  "Ouengcharoen"
);
let sub1 = new Subjects("GEN101", "PHYSICAL EDUCATION", 1, grades.a);
let sub2 = new Subjects(
  "GEN121",
  "	LEARNING AND PROBLEM SOLVING SKILLS",
  3,
  grades.b
);
let sub3 = new Subjects(
  "INT100",
  "	INFORMATION TECHNOLOGY FUNDAMENTALS",
  3,
  grades.a
);
let sub4 = new Subjects("INT101", "PROGRAMMING FUNDAMENTALS", 3, grades.bplus);
let sub5 = new Subjects("INT102", "WEB TECHNOLOGY", 1, grades.a);
let sub6 = new Subjects(
  "INT114",
  "DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY",
  3,
  grades.a
);
let sub7 = new Subjects("LNG220", "ACADEMIC ENGLISH", 3, grades.a);
let sub8 = new Subjects("GEN111", "MAN AND ETHICS OF LIVING", 3, grades.a);
let sub9 = new Subjects("INT103", "ADVANCED PROGRAMMING", 3, grades.a);
let sub10 = new Subjects("INT104", "USER EXPERIENCE DESIGN", 3, grades.a);
let sub11 = new Subjects("INT105", "BASIC SQL", 1, grades.a);
let sub12 = new Subjects(
  "INT107",
  "COMPUTING PLATFORMS TECHNOLOGY",
  3,
  grades.bplus
);
let sub13 = new Subjects("INT200", "DATA STRUCTURE & ALGORITHM", 1, grades.a);
let sub14 = new Subjects("LNG332", "BUSINESS ENGLISH", 3, grades.b);
let sem1 = [sub1, sub2, sub3, sub4, sub5, sub6, sub7];
let sem1 = [sub8, sub9, sub10, sub11, sub12, sub13, sub14];
let std1 = new Students(p1, [sem1, sem2], eduCond.NORMAL);
