let subjects = JSON.parse(localStorage.getItem("subjects")) || [];
let studies = JSON.parse(localStorage.getItem("studies")) || [];

function addSubject() {
  let input = document.getElementById("subjectInput");
  subjects.push(input.value);
  localStorage.setItem("subjects", JSON.stringify(subjects));
  input.value = "";
  displaySubjects();
}

function displaySubjects() {
  let list = document.getElementById("subjectList");
  list.innerHTML = "";
  subjects.forEach(sub => {
    let li = document.createElement("li");
    li.textContent = sub;
    list.appendChild(li);
  });
}

function addStudy() {
  let date = document.getElementById("studyDate").value;
  let time = document.getElementById("studyTime").value;
  let topic = document.getElementById("studyTopic").value;

  studies.push({date, time, topic});
  localStorage.setItem("studies", JSON.stringify(studies));
  displayStudies();
}

function displayStudies() {
  let list = document.getElementById("studyList");
  list.innerHTML = "";
  studies.forEach(study => {
    let li = document.createElement("li");
    li.textContent = study.date + " | " + study.time + " | " + study.topic;
    list.appendChild(li);
  });
}

displaySubjects();
displayStudies();
