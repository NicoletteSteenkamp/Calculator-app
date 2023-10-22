let input = document.getElementById("input");
let buttons = Array.from(document.getElementsByClassName("btn"));
let operator = "";
let data = [];

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    if (buttonText === "AC") {
      input.innerText = "";
      data = [];
      operator = "";
    } else if (buttonText === "DE") {
      input.innerText = input.innerText.slice(0, -1);
    } else if (buttonText === ".") {
      if (!input.innerText.includes(".")) {
        input.innerText += buttonText;
      }
    } else if (buttonText === "=") {
      data.push(input.innerText);
      let expression = data.join(" ");
      let result;
      try {
        result = eval(expression);
        if (!isFinite(result)) {
          throw "Division by zero";
        }
      } catch (error) {
        result = "ERR";
      }
      input.innerText = result;
      data = [];
      operator = "";
    } else if (isNaN(parseInt(buttonText))) {
      operator = buttonText;
      data.push(input.innerText);
      data.push(operator);
      input.innerText = "";
    } else {
      input.innerText += buttonText;
    }
  });
});
