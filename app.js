'use strict';

let parent = document.getElementById('parent');
let table = document.createElement('table');
table.classList.add('table');

parent.appendChild(table);


let headData = ['Student name', 'Student Grade', 'Course', 'Status'];
function header() {
  let firstRow = document.createElement('tr');
  table.appendChild(firstRow);

  for (let x = 0; x < headData.length; x++) {
    let items = document.createElement('th');
    firstRow.appendChild(items);
    items.classList.add('th');

    items.textContent = headData[x];
  }
}
header();

let students = [];
function Student(name, grade, course, status) {
  this.name = name;
  this.grade = grade;
  this.course = course;
  this.status = status;
  students.push(this);
  updateStorge();
}


function updateStorge() {
  let arrayString = JSON.stringify(students);
  localStorage.setItem('Student', arrayString);
}

function getStudentData() {
  let student = localStorage.getItem('Student');
  let data = JSON.parse(student);

  if (data) {
    students = data;
  }
}


Student.prototype.render = function () {

  let studentData = document.createElement('tr');
  table.appendChild(studentData);

  // for (let x = 0; x < headData.length; x++) {

  // for (let j = 0; j < students.length; j++) {



  let studentName = document.createElement('td');
  studentName.classList.add('td');
  studentData.appendChild(studentName);
  studentName.textContent = this.name;

  let studentGrade = document.createElement('td');
  studentGrade.classList.add('td');
  studentData.appendChild(studentGrade);
  studentGrade.textContent = this.grade;


  let Course = document.createElement('td');
  Course.classList.add('td');
  studentData.appendChild(Course);
  Course.textContent = this.course;


  let studentStatus = document.createElement('td');
  studentStatus.classList.add('td');
  studentData.appendChild(studentStatus);
  studentStatus.textContent = this.status;
  // }

  // }

};


let form = document.getElementById('form');
form.addEventListener('submit', showResults);



function showResults(event) {
  event.preventDefault();

  let name = event.target.name.value;
  let course = event.target.course.value;
  let grade = Math.floor(Math.random() * 100);

  let status;
  if (grade >= 50) {
    status = 'Pass';
  }
  else {
    status = 'Fail';
  }


  let studentObj = new Student(name, grade, course, status);
  // table.textContent = '';
  // header();
  studentObj.render();

  updateStorge();
}


  // for (let c = 0; c < students.length; c++) {
  //   students[c].render();
  //   console.log(students[c]);
  // }
getStudentData();
