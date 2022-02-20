// catch all input tags
let inputs = document.querySelectorAll("#input");
let input__values = [];
// calculate btn
let calculateButton = document.getElementById("calculate__btn");
// calculate button listener
calculateButton.addEventListener("click", () => {
  let wrongMessage = "";
  inputs.forEach((item, index) => {
    if (
      !+item.value ||
      +item.value < 0 ||
      +item.value > 4.0 ||
      item.value == ""
    ) {
      wrongMessage = warningMessageForWrongInput(index);
    } else input__values.push(+item.value);
  });
  // catch select probidhan
  let select__probidhan = document.getElementById("select_probidhan");
  let currentFormula = findSelectedFormula(select__probidhan);
  if (input__values.length == 8) {
    showTheWrongMessage();
    let percentage = findPercentage(input__values, currentFormula);
    showTheFinalResult(percentage);
    input__values.length = 0;
  } else {
    input__values.length = 0;
    showTheWrongMessage(wrongMessage);
  }
});
// select probidhan
const findSelectedFormula = (select__probidhan) => {
  let selected__formula = [5, 5, 5, 10, 15, 20, 25, 15];
  if (select__probidhan.value == "2010") {
    selected__formula = [5, 5, 5, 15, 15, 20, 25, 10];
  }
  return selected__formula;
};
// warning message for wrong input
const warningMessageForWrongInput = (index) => {
  return `${index + 1} semester result not valid!`;
};
// show the wrong message
const showTheWrongMessage = (message = false) => {
  let showMessage = document.getElementById("show__wrong__message");
  if (message) {
    showMessage.innerHTML = `<h6 class = 'wrong-message'> ${message} </h6>`;
  } else {
    showMessage.innerHTML = ``;
  }
};
// find the percentage
const findPercentage = (result, percentages) => {
  let ans = 0;
  result.forEach((res, index) => {
    let single = (res * percentages[index]) / 100;
    ans += single;
  });
  return ans.toFixed(2);
};
// show the final result
const showTheFinalResult = (result) => {
  let showMessage = document.getElementById("show__wrong__message");
  let grade = findTheGradeLatter(result);
  if (result) {
    showMessage.innerHTML = `
        <div class="final-message">
            <h5>Final CGPA : <span> ${result} </span> , Grade : <span> ${grade} </span>
        </div>
        `;
  }
};
// calculate the grade
const findTheGradeLatter = (CGPA) => {
  if (CGPA == 4.0) {
    return "A+";
  } else if (CGPA >= 3.75 && CGPA < 4.0) {
    return "A";
  } else if (CGPA >= 3.5 && CGPA < 3.75) {
    return "A-";
  } else if (CGPA >= 3.25 && CGPA < 3.5) {
    return "B+";
  } else if (CGPA >= 3.0 && CGPA < 3.25) {
    return "B";
  } else if (CGPA >= 2.75 && CGPA < 3.0) {
    return "B-";
  } else if (CGPA >= 2.5 && CGPA < 2.75) {
    return "C+";
  } else if (CGPA >= 2.25 && CGPA < 2.5) {
    return "C";
  } else if (CGPA >= 2.0 && CGPA < 2.25) {
    return "D";
  } else {
    return "F";
  }
};
// clear
const clear = () => {
  let clearBtn = document.getElementById("clear__btn");
  clearBtn.addEventListener("click", (e) => {
    inputs.forEach((item, index) => {
      item.value = "";
    });
    let showMessage = document.getElementById("show__wrong__message");
    showMessage.innerHTML = "";
  });
};
clear();
