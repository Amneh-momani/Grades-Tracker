'use strict';

let parent = document.getElementById('parent');
let table = document.createElement('table');
table.classList.add("table");

parent.appendChild(table);



let headData = ['Student name', 'Student Grade', 'Course', 'Status'];
function header() {
  let firstRow = document.createElement('tr');
  table.appendChild(firstRow);

  for (let x = 0; x < headData.length; x++) {
    let items = document.createElement('th');
    firstRow.appendChild(items);
    items.classList.add("th");

    items.textContent = headData[x];
  }
}
header();

let students = [];
// let grade=0;
// let status="";
function Student(name, grade, course, status) {
  this.name = name;
  this.grade = grade;
  this.course = course;
  this.status = status;
  students.push(this);
  updateStorge();
}

// Math.floor(Math.random() * 100))

function updateStorge() {
  let arrayString = JSON.stringify(Student.students);
  localStorage.setItem('Student', arrayString);
}

function getStudentData(){
  let student = localStorage.getItem('Student');
  let data = JSON.parse(student);

  if (data) {
    Student.students = data;
  }
}

Student.prototype.randomGrade = function () {
  let randGrade = Math.floor(Math.random() * 100);
  this.grade = randGrade;
  console.log(randGrade);
};

Student.prototype.render = function () {
  let studentData = document.createElement('tr');
  table.appendChild(studentData);

  for (let x = 0; x < headData.length; x++) {
    // let items = document.createElement('th');
    // studentData.appendChild(items);

    if (this.grade >= 50) {
      this.status = 'Pass';
    }
    else {
      this.status = 'Fail';
    }
    for (let y = 0; y < Student.students.length; y++) {
      // items.textContent =headData[x].students[y];
      let items = document.createElement('td');
      items.classList.add("td");

      studentData.appendChild(items);
      items.textContent = Student.students[y];
    // items.textContent ="name";
    console.log(students);

    }
  }

};

let form = document.getElementById('form');
form.addEventListener('submit', showResults);



function showResults(event) {
  event.preventDefault();

  let name = event.target.name.value;
  let course = event.target.course.value;
  let grade = this.grade;
  let status = this.status;

  let studentObj = new Student(name, grade, course, status);

  table.textContent = '';
  header();
  for (let i = 0; i < students.length; i++) {
    students[i].randomGrade();
    students[i].render();
  }

  updateStorge();
}

getStudentData();
