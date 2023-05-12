"use strict";
// variables created
let radian = true;
let fixedToExp = false;
let inv_flag = false;
let hyp_flag = false;
let input = document.querySelector(".input");
let btns = document.querySelectorAll(".calcbtn");
let equalBtn = document.querySelector("#equal");
let degreeBtn = document.querySelector("#degree");
let fixToExpBtn = document.querySelector("#fixExp");
let change2Btn = document.querySelectorAll(".change2");
let change_2 = document.getElementById("change_2");
let trignoBtn = document.querySelector("#trignoBtn");
let funcBtn = document.querySelector("#funcBtn");
let trignodrop = document.getElementById("trigno");
let funcdrop = document.getElementById("func");
let inverse = document.querySelector(".inverse");
let hyperbolic = document.querySelector(".hyperbolic");
let mcBtn = document.getElementById("MC");
let mrBtn = document.getElementById("MR");
let cosBtn = document.getElementById("cos");
let tanBtn = document.getElementById("tan");
let secBtn = document.getElementById("sec");
let sinBtn = document.getElementById("sin");
let cscBtn = document.getElementById("csc");
let cotBtn = document.getElementById("cot");
let operArr = [];
let exArr = [];
let calcExpression = "";
let memory = 0;
// onclick events on calc buttons
// pushing them into operArr and exArr
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    switch (btns[i].innerHTML) {
      case "0": {
        operArr.push("0");
        exArr.push("0");
        break;
      }
      case "1": {
        operArr.push("1");
        exArr.push("1");
        break;
      }
      case "2": {
        operArr.push("2");
        exArr.push("2");
        break;
      }
      case "3": {
        operArr.push("3");
        exArr.push("3");
        break;
      }
      case "4": {
        operArr.push("4");
        exArr.push("4");
        break;
      }
      case "5": {
        operArr.push("5");
        exArr.push("5");
        break;
      }
      case "6": {
        operArr.push("6");
        exArr.push("6");
        break;
      }
      case "7": {
        operArr.push("7");
        exArr.push("7");
        break;
      }
      case "8": {
        operArr.push("8");
        exArr.push("8");
        break;
      }
      case "9": {
        operArr.push("9");
        exArr.push("9");
        break;
      }
      case ".": {
        operArr.push(".");
        exArr.push(".");
        break;
      }
      case "+": {
        operArr.push("+");
        exArr.push("+");
        break;
      }
      case "-": {
        operArr.push("-");
        exArr.push("-");
        break;
      }
      case "×": {
        operArr.push("×");
        exArr.push("*");
        break;
      }
      case "÷": {
        operArr.push("÷");
        exArr.push("/");
        break;
      }
      case "(": {
        operArr.push("(");
        exArr.push("(");
        break;
      }
      case ")": {
        operArr.push(")");
        exArr.push(")");
        break;
      }
      case "Π": {
        operArr.push("Π");
        exArr.push("Math.PI");
        break;
      }
      case "e": {
        operArr.push("e");
        exArr.push("Math.E");
        break;
      }
      case "ln": {
        operArr.push("ln(");
        exArr.push("Math.log(");
        break;
      }
      case "log": {
        operArr.push("log(");
        exArr.push("Math.log10(");
        break;
      }
      case "√x": {
        operArr.push("√(");
        exArr.push("Math.sqrt(");
        break;
      }
      case "x<sup>2</sup>": {
        operArr.push("^2");
        exArr.push("**2");
        break;
      }
      case "x<sup>y</sup>": {
        operArr.push("^(");
        exArr.push("**(");
        break;
      }
      case "1/x": {
        operArr.push("1/");
        exArr.push("1/");
        break;
      }
      case "|x|": {
        operArr.push("abs(");
        exArr.push("Math.abs(");
        break;
      }
      case "mod": {
        operArr.push("%");
        exArr.push("%");
        break;
      }
      case "√x": {
        operArr.push("√(");
        exArr.push("**(1/2)");
        break;
      }
      case "2<sup>nd</sup>": {
        changefunc();
        break;
      }
      case "e<sup>x</sup>": {
        operArr.push("e^(");
        exArr.push("Math.exp(");
        break;
      }
      case "y√x": {
        operArr.push("√(");
        exArr.push("*Math.sqrt(");
        break;
      }
      case "log<sub>y</sub>x": {
        let base = operArr[operArr.length - 1];
        exArr.pop();
        operArr.push("baselog(");
        exArr.push("Math.log(" + base + ")/Math.log(");
        break;
      }
      case "x<sup>3</sup>": {
        operArr.push("^3");
        exArr.push("**3");
        break;
      }
      case "2<sup>x</sup>": {
        operArr.push("2^(");
        exArr.push("Math.pow(2,");
        break;
      }
      case "10<sup>x</sup>": {
        operArr.push("10^(");
        exArr.push("Math.pow(10,");
        break;
      }
      case "∛x": {
        operArr.push("∛(");
        exArr.push("Math.cbrt(");
        break;
      }
      case "sin": {
        operArr.push("sin(");
        if (radian) {
          exArr.push("Math.sin(");
          break;
        } else {
          exArr.push("Math.sin((Math.PI/180)*");
          break;
        }
      }
      case "cos": {
        operArr.push("cos(");
        if (radian) {
          exArr.push("Math.cos(");
          break;
        } else {
          exArr.push("Math.cos((Math.PI/180)*");
          break;
        }
      }
      case "tan": {
        operArr.push("tan(");
        if (radian) {
          exArr.push("Math.tan(");
          break;
        } else {
          exArr.push("Math.tan((Math.PI/180)*");
          break;
        }
      }
      case "sec": {
        operArr.push("sec(");
        if (radian) {
          exArr.push("1/Math.cos(");
          break;
        } else {
          exArr.push("1/Math.cos((Math.PI/180)*");
          break;
        }
      }
      case "csc": {
        operArr.push("csc(");
        if (radian) {
          exArr.push("1/Math.sin(");
          break;
        } else {
          exArr.push("1/Math.sin((Math.PI/180)*");
          break;
        }
      }
      case "cot": {
        operArr.push("cot(");
        if (radian) {
          exArr.push("1/Math.tan(");
          break;
        } else {
          exArr.push("1/Math.tan((Math.PI/180)*");
          break;
        }
      }
      case "⌊x⌋": {
        operArr.push("floor(");
        exArr.push("Math.floor(");
        break;
      }
      case "⌈x⌉": {
        operArr.push("ceil(");
        exArr.push("Math.ceil(");
        break;
      }
      case "rand": {
        let num = Math.random();
        operArr.push(num.toString());
        exArr.push(num.toString());
        break;
      }
      case "sin<sup>-1</sup>": {
        operArr.push("arcsin(");
        if (radian) {
          exArr.push("Math.asin(");
          break;
        } else {
          exArr.push("Math.asin((Math.PI/180)*");
          break;
        }
      }
      case "cos<sup>-1</sup>": {
        operArr.push("arccos(");
        if (radian) {
          exArr.push("Math.acos(");
          break;
        } else {
          exArr.push("Math.acos((Math.PI/180)*");
          break;
        }
      }
      case "tan<sup>-1</sup>": {
        operArr.push("arctan(");
        if (radian) {
          exArr.push("Math.atan(");
          break;
        } else {
          exArr.push("Math.atan((Math.PI/180)*");
          break;
        }
      }
      case "csc<sup>-1</sup>": {
        operArr.push("arccsc(");
        if (radian) {
          exArr.push("Math.asin(1/");
          break;
        } else {
          exArr.push("Math.asin(1/((Math.PI/180)*");
          break;
        }
      }
      case "sec<sup>-1</sup>": {
        operArr.push("arcsec(");
        if (radian) {
          exArr.push("Math.acos(1/");
          break;
        } else {
          exArr.push("Math.acos(1/((Math.PI/180)*");
          break;
        }
      }
      case "cot<sup>-1</sup>": {
        operArr.push("arccot(");
        if (radian) {
          exArr.push("Math.atan(1/");
          break;
        } else {
          exArr.push("Math.atan(1/((Math.PI/180)*");
          break;
        }
      }
      case "sinh": {
        operArr.push("sinh(");
        if (radian) {
          exArr.push("Math.sinh(");
          break;
        } else {
          exArr.push("Math.sinh((Math.PI/180)*");
          break;
        }
      }
      case "cosh": {
        operArr.push("cosh(");
        if (radian) {
          exArr.push("Math.cosh(");
          break;
        } else {
          exArr.push("Math.cosh((Math.PI/180)*");
          break;
        }
      }
      case "tanh": {
        operArr.push("tanh(");
        if (radian) {
          exArr.push("Math.tanh(");
          break;
        } else {
          exArr.push("Math.tanh((Math.PI/180)*");
          break;
        }
      }
      case "csch": {
        operArr.push("csch(");
        if (radian) {
          exArr.push("1/Math.sinh(");
          break;
        } else {
          exArr.push("1/Math.sinh((Math.PI/180)*");
          break;
        }
      }
      case "sech": {
        operArr.push("sech(");
        if (radian) {
          exArr.push("1/Math.cosh(");
          break;
        } else {
          exArr.push("1/Math.cosh((Math.PI/180)*");
          break;
        }
      }
      case "coth": {
        operArr.push("coth(");
        if (radian) {
          exArr.push("1/Math.tanh(");
          break;
        } else {
          exArr.push("1/Math.tanh((Math.PI/180)*");
          break;
        }
      }
      case "sin<sup>-1</sup>h": {
        operArr.push("arcsinh(");
        if (radian) {
          exArr.push("Math.asinh(");
          break;
        } else {
          exArr.push("Math.asinh((Math.PI/180)*");
          break;
        }
      }
      case "cos<sup>-1</sup>h": {
        operArr.push("arccosh(");
        if (radian) {
          exArr.push("Math.acosh(");
          break;
        } else {
          exArr.push("Math.acosh((Math.PI/180)*");
          break;
        }
      }
      case "tan<sup>-1</sup>h": {
        operArr.push("arctanh(");
        if (radian) {
          exArr.push("Math.atanh(");
          break;
        } else {
          exArr.push("Math.atanh((Math.PI/180)*");
          break;
        }
      }
      case "csc<sup>-1</sup>h": {
        operArr.push("arccsch(");
        if (radian) {
          exArr.push("Math.asinh(");
          break;
        } else {
          exArr.push("1/Math.asinh((Math.PI/180)*");
          break;
        }
      }
      case "sec<sup>-1</sup>h": {
        operArr.push("arcsech(");
        if (radian) {
          exArr.push("Math.asinh(");
          break;
        } else {
          exArr.push("1/Math.acosh((Math.PI/180)*");
          break;
        }
      }
      case "cot<sup>-1</sup>h": {
        operArr.push("arccoth(");
        if (radian) {
          exArr.push("Math.asinh(");
          break;
        } else {
          exArr.push("1/Math.atanh((Math.PI/180)*");
          break;
        }
      }
      case "exp": {
        let exp = Number(input.value).toExponential();
        allClear();
        operArr.push(exp);
        break;
      }
      case "→deg": {
        operArr.push("→deg(");
        exArr.push("(180/Math.PI)*(");
        break;
      }
      case "→dms": {
        operArr.push("→dms");
        let n = Number(exArr.join(""));
        let str = degree_dms(n);
        exArr.push("→dms");
        exArr.push(str);
        break;
      }
      case "n!": {
        operArr.push("!");
        let n = parseInt(exArr[exArr.length - 1]);
        exArr.pop();
        exArr.push(factorial(n).toString());
        break;
      }
    }
    display(operArr);
  });
}
// displaying the input to the display
function display(operArr) {
  input.value = operArr.join("");
}
// backspace function
function backspace() {
  if (input.value == "Expression Error") {
    input.value = "";
    operArr.splice(0, operArr.length);
    exArr.splice(0, exArr.length);
  } else {
    operArr.pop();
    exArr.pop();
    input.value = operArr.join("");
  }
}
// allclear function
function allClear() {
  operArr.splice(0, operArr.length);
  exArr.splice(0, exArr.length);
  input.value = operArr.join("");
}
// factorial function
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  if (result == Infinity) {
    return Infinity;
  }
  return result;
}
//fixed to exponent button switching
fixToExpBtn.addEventListener("click", () => {
  let fixExpBtn = document.getElementById("fixExp");
  if (fixToExpBtn.innerHTML == "F-E") {
    fixToExpBtn.innerHTML = "F->E";
    fixExpBtn.style.backgroundColor = "#91c1e7";
    fixedToExp = true;
  } else {
    fixToExpBtn.innerHTML = "F-E";
    fixExpBtn.style.backgroundColor = "transparent";
    fixedToExp = false;
  }
});
//switching between degree and radians
degreeBtn.addEventListener("click", () => {
  if (degreeBtn.innerHTML == "DEG") {
    degreeBtn.innerHTML = "RAD";
    radian = false;
  } else {
    degreeBtn.innerHTML = "DEG";
    radian = true;
  }
});

//memoryStore function
function memoryStore() {
  memory = Number(input.value);
  if (memory != 0) {
    mcBtn.classList.toggle("mem-color");
    mrBtn.classList.toggle("mem-color");
  }
}
//memoryAdd function
function memoryAdd() {
  memory += Number(input.value);
}
//memorySubtract function
function memorySub() {
  memory -= Number(input.value);
}
//memoryStore function
function memoryRecall() {
  input.value = memory.toString();
}
//memoryClear function
function memoryClear() {
  memory = 0;
  mcBtn.classList.toggle("mem-color");
  mrBtn.classList.toggle("mem-color");
}
// switching between 2nd button
function changefunc() {
  if (change_2.classList.contains("change")) {
    change_2.classList.remove("change");
    change_2.style.backgroundColor = "#f7f7f8";
    for (let i = 0; i < change2Btn.length; i++) {
      if (change2Btn[i].innerHTML == "x<sup>3</sup>")
        change2Btn[i].innerHTML = "x<sup>2</sup>";
      else if (change2Btn[i].innerHTML == "∛x") change2Btn[i].innerHTML = "√x";
      else if (change2Btn[i].innerHTML == "y√x")
        change2Btn[i].innerHTML = "x<sup>y</sup>";
      else if (change2Btn[i].innerHTML == "2<sup>x</sup>")
        change2Btn[i].innerHTML = "10<sup>x</sup>";
      else if (change2Btn[i].innerHTML == "log<sub>y</sub>x")
        change2Btn[i].innerHTML = "log";
      else change2Btn[i].innerHTML = "ln";
    }
    return;
  }
  change_2.style.backgroundColor = "#91c1e7";
  change_2.classList.add("change");
  for (let i = 0; i < change2Btn.length; i++) {
    if (change2Btn[i].innerHTML == "x<sup>2</sup>")
      change2Btn[i].innerHTML = "x<sup>3</sup>";
    else if (change2Btn[i].innerHTML == "√x") change2Btn[i].innerHTML = "∛x";
    else if (change2Btn[i].innerHTML == "x<sup>y</sup>")
      change2Btn[i].innerHTML = "y√x";
    else if (change2Btn[i].innerHTML == "10<sup>x</sup>")
      change2Btn[i].innerHTML = "2<sup>x</sup>";
    else if (change2Btn[i].innerHTML == "log")
      change2Btn[i].innerHTML = "log<sub>y</sub>x";
    else change2Btn[i].innerHTML = "e<sup>x</sup>";
  }
}
// changing sign function
function changesign() {
  if ((operArr[0] != "+" && operArr[0] != "-") || operArr[0] == "+") {
    operArr.unshift("-");
    exArr.unshift("-");
    return;
  }
  if (operArr[0] == "-") {
    operArr.shift();
    exArr.shift();
    return;
  }
}

// degree to dms function
function degree_dms(n) {
  let degree = 0,
    min = 0,
    sec = 0;
  degree = Math.trunc(n);
  min = Math.trunc((Math.abs(n) - Math.floor(n)) * 60);
  sec = Math.trunc(
    (Math.abs((Math.abs(n) - Math.floor(n)) * 60) -
      Math.floor((Math.abs(n) - Math.floor(n)) * 60)) *
      60
  );
  let str = degree + "°" + min + "'" + sec + '"';
  return str;
}
// calcfunctions button dropdown
funcBtn.addEventListener("click", () => {
  funcdrop.classList.toggle("display");
  if (trignodrop.classList.contains("display") == false)
    trignodrop.classList.toggle("display");
});
//trignoInverse function
function inv_activate() {
  if (inv_flag) {
    reset_trigno();
    inv_flag = false;
    inverse.style.backgroundColor = "#fff";
    return;
  }
  sinBtn.innerHTML = "sin<sup>-1</sup>";
  cosBtn.innerHTML = "cos<sup>-1</sup>";
  tanBtn.innerHTML = "tan<sup>-1</sup>";
  secBtn.innerHTML = "sec<sup>-1</sup>";
  cscBtn.innerHTML = "csc<sup>-1</sup>";
  cotBtn.innerHTML = "cot<sup>-1</sup>";
  inv_flag = true;
  inverse.style.backgroundColor = "#91c1e7";
  if (inv_flag && hyp_flag) {
    inv_hyp();
  }
}
//trignoHyperbolic function
function hyp_activate() {
  if (hyp_flag) {
    reset_trigno();
    hyp_flag = false;
    hyperbolic.style.backgroundColor = "#fff";
    return;
  }
  sinBtn.innerHTML = "sinh";
  cosBtn.innerHTML = "cosh";
  tanBtn.innerHTML = "tanh";
  secBtn.innerHTML = "sech";
  cscBtn.innerHTML = "csch";
  cotBtn.innerHTML = "coth";
  hyp_flag = true;
  hyperbolic.style.backgroundColor = "#91c1e7";
  if (inv_flag && hyp_flag) {
    inv_hyp();
  }
}
// reseting trigno function
function reset_trigno() {
  sinBtn.innerHTML = "sin";
  cosBtn.innerHTML = "cos";
  tanBtn.innerHTML = "tan";
  secBtn.innerHTML = "sec";
  cscBtn.innerHTML = "csc";
  cotBtn.innerHTML = "cot";
}
// inverse hyperbolic function
function inv_hyp() {
  sinBtn.innerHTML = "sin<sup>-1</sup>h";
  cosBtn.innerHTML = "cos<sup>-1</sup>h";
  tanBtn.innerHTML = "tan<sup>-1</sup>h";
  secBtn.innerHTML = "sec<sup>-1</sup>h";
  cscBtn.innerHTML = "csc<sup>-1</sup>h";
  cotBtn.innerHTML = "cot<sup>-1</sup>h";
}
//trignometric functions dropdown
trignoBtn.addEventListener("click", () => {
  trignodrop.classList.toggle("display");
  if (funcdrop.classList.contains("display") == false)
    funcdrop.classList.toggle("display");
});
// evaluating expression array
equalBtn.addEventListener("click", () => {
  console.log(operArr);
  console.log(exArr);
  if (exArr.includes("→dms")) {
    input.value = exArr[exArr.length - 1];
    operArr.splice(0, operArr.length);
    exArr.splice(0, exArr.length);
    return;
  }
  calcExpression = exArr.join("");
  if (calcExpression.includes("|")) {
    calcExpression.replace("|", ")");
  }
  let result;
  try {
    result = eval(calcExpression);
    if (fixedToExp) {
      input.value = result.toExponential();
    } else input.value = result;
  } catch (e) {
    if (e instanceof SyntaxError) {
      input.value = "Expression Error";
    }
  }
  operArr.splice(0, operArr.length);
  exArr.splice(0, exArr.length);
  operArr.push(result.toString());
  exArr.push(result.toString());
});
