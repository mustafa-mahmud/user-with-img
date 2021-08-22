'use strict';

const inputNameEl = document.querySelector('input[name="name"]');
const inputFileEl = document.querySelector('input[name="uploadfile"]');
const inputPasswordEl = document.querySelector('input[name="password"]');
const insertFormEl = document.getElementById('insert');
const msgEl = document.getElementById('msg');

function insertUsers(e) {
  e.preventDefault();

  //file validation
  // fileValidation();
}

function fileValidation() {
  const img = inputFileEl.value.toLowerCase();
  if (img.includes('.jpg') || img.includes('.png') || img.includes('.jpeg')) {
    msgEl.textContent = '';
    msgEl.style.color = '';
  } else {
    wrongMsg('red', 'Only jpg, jpeg, png supported');
  }
}

function wrongMsg(color, msg) {
  msgEl.textContent = msg;
  msgEl.style.color = color;
}

/////////////////
insertFormEl.addEventListener('submit', insertUsers);
inputFileEl.addEventListener('change', fileValidation);
