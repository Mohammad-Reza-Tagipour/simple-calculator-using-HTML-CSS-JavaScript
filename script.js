const display = document.querySelector("#display");

const buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";

        break;
      case "←":
        if (display.innerText && !display.innerText.includes("Error!")) {
          display.innerText = display.innerText.slice(0, -1);
        } else if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }

        break;
      case "=":
        try {
          if (display.innerText.includes("Error!")) {
            display.innerText = "";
          } else if (display.innerText.includes("undefined")) {
            display.innerText = "";
          } else {
            display.innerText = eval(display.innerText);
          }
        } catch {
          display.innerText = "Error!";
        }
        break;

      default:
        display.innerText += e.target.innerText;
    }
    switch (e.target.innerText) {
      case "1":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "2":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "3":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "4":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "5":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "6":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "7":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "7":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "8":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "9":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "0":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "(":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case ")":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "*":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case ".":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
      case "-":
        if (display.innerText.includes("Error!")) {
          display.innerText = "";
        }
        break;
    }
  });
});
