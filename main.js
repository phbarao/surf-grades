let grades = [];

const gradesForm = document.querySelector("form");

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const p = document.createElement("p");

  if (isValid) {
    p.classList.add("good");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  result.appendChild(p);
}

// Submiting form:
gradesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const input1 = e.target.querySelector('input[name="grade1"]');
  const input2 = e.target.querySelector('input[name="grade2"]');
  const input3 = e.target.querySelector('input[name="grade3"]');
  const input4 = e.target.querySelector('input[name="grade4"]');
  const input5 = e.target.querySelector('input[name="grade5"]');

  const grade1 = Number(input1.value);
  const grade2 = Number(input2.value);
  const grade3 = Number(input3.value);
  const grade4 = Number(input4.value);
  const grade5 = Number(input5.value);

  // VALIDATIONS
  if (!grade1 | !grade2 | !grade3 | !grade4 | !grade5) {
    setResult("É obrigatório informar as 5 notas.", false);
    return;
  }

  if (
    (grade1 < 0) |
    (grade2 < 0) |
    (grade3 < 0) |
    (grade4 < 0) |
    (grade5 < 0)
  ) {
    setResult("As notas nao podem ser menores que 0.", false);
    return;
  }

  if (
    (grade1 > 10) |
    (grade2 > 10) |
    (grade3 > 10) |
    (grade4 > 10) |
    (grade5 > 10)
  ) {
    setResult("As notas nao podem ser maiores que 10.", false);
    return;
  }

  grades.push(grade1, grade2, grade3, grade4, grade5);

  const orderedList = grades.sort((a, b) => {
    return a - b;
  });

  const validNote = (
    (orderedList[1] + orderedList[2] + orderedList[3]) /
    3
  ).toFixed(2);

  const msg = `Nota Final: <strong data-cy="final-grade">${validNote}</strong>`;
  setResult(msg, true);

  document.querySelector("button").disabled = true;
});
