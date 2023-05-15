"use strict";

const input = document.querySelector(".input");
const equalBtn = document.querySelector("#equal");
const funcMenu = document.querySelector(".func-menu");
const bottomPart = document.querySelector(".grid-container2");
const fixToExpBtn = document.querySelector("#fixExp");
const degreeBtn = document.querySelector("#degree");
const change2Btn = document.querySelectorAll(".change2");
const change_2 = document.getElementById("change_2");
const trignoBtn = document.querySelector("#trignoBtn");
const funcBtn = document.querySelector("#funcBtn");
const trignodrop = document.getElementById("trigno");
const funcdrop = document.getElementById("func");
const inverse = document.querySelector(".inverse");
const hyperbolic = document.querySelector(".hyperbolic");
const mcBtn = document.getElementById("MC");
const mrBtn = document.getElementById("MR");
const cosBtn = document.getElementById("cos");
const tanBtn = document.getElementById("tan");
const secBtn = document.getElementById("sec");
const sinBtn = document.getElementById("sin");
const cscBtn = document.getElementById("csc");
const cotBtn = document.getElementById("cot");

let memory = 0;
let inputArr = [];
let exArr = [];
let fixedToExp = false;
let radian = true;
let inv_flag = false;
let hyp_flag = false;

// on click on function buttons
funcMenu.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  if (e.target.innerText == "|x|") {
    inputArr.push("abs(");
    exArr.push("Math.abs(");
  } else if (e.target.innerText == "⌊x⌋") {
    inputArr.push("floor(");
    exArr.push("Math.floor(");
  } else if (e.target.innerText == "⌈x⌉") {
    inputArr.push("ceil(");
    exArr.push("Math.ceil(");
  } else if (e.target.innerText == "rand") {
    const num = Math.random();
    inputArr.push("num.toString()");
    exArr.push("num.toString()");
  } else if (e.target.innerText == "→deg") {
    inputArr.push("→deg(");
    exArr.push("(180/Math.PI)*(");
  } else if (e.target.innerText == "→dms") {
    inputArr.push("→dms");
    const n = parseInt(exArr.join(""));
    const str = degree_dms(n);
    console.log(n, str);
    console.log(inputArr);
    exArr.push("→dms");
    exArr.push(str);
    console.log(exArr);
  }
  display(inputArr.join(""));
});

// on click on bottom Part of calc
bottomPart.addEventListener("click", async (e) => {
  console.log(e.target.innerText);
  if (e.target.classList.contains("evalable")) {
    if (e.target.innerText == "mod") {
      inputArr.push("%");
      exArr.push("%");
    } else if (e.target.innerText == "1/x") {
      inputArr.push("1/");
      exArr.push("1/");
    } else if (e.target.innerText == "|x|") {
      inputArr.push("abs(");
      exArr.push("Math.abs(");
    } else if (e.target.innerText == "√x") {
      inputArr.push("√(");
      exArr.push("Math.sqrt(");
    } else if (e.target.innerText == "y√x") {
      inputArr.push("√(");
      exArr.push("*Math.sqrt(");
    } else if (e.target.innerText == "∛x") {
      inputArr.push("∛(");
      exArr.push("**(1/2)");
    } else if (e.target.innerText == "exp") {
      const exp = Number(input.value).toExponential();
      inputArr.push(exp);
    } else if (e.target.innerText == "x2") {
      inputArr.push("^2");
      console.log(inputArr);
      exArr.push("**(2)");
    } else if (e.target.innerText == "xy") {
      inputArr.push("^(");
      exArr.push("**(");
    } else if (e.target.innerText == "ex") {
      inputArr.push("e^(");
      exArr.push("Math.exp(");
    } else if (e.target.innerText == "logyx") {
      const base = operArr[operArr.length - 1];
      exArr.pop();
      inputArr.push("baselog(");
      exArr.push("Math.log(" + base + ")/Math.log(");
    } else if (e.target.innerText == "x3") {
      inputArr.push("^3");
      exArr.push("**3");
    } else if (e.target.innerText == "2x") {
      inputArr.push("2^(");
      exArr.push("Math.pow(2,");
    } else if (e.target.innerText == "10x") {
      inputArr.push("10^(");
      exArr.push("Math.pow(10,");
    } else {
      inputArr.push(e.target.innerText);
      exArr.push(e.target.innerText);
    }
  }
  if (e.target.classList.contains("logarithmic")) {
    inputArr.push(e.target.innerText, "(");
    exArr.push(e.target.innerText, "(");
  }
  //   console.log("input", inputArr);
  //   console.log(exArr);
  display(inputArr.join(""));
  exArr = await replaceElements(exArr);
  if (e.target.classList.contains("factorial")) {
    const result = factorial(eval(exArr.join("")));
    inputArr.splice(0, inputArr.length);
    inputArr.push(result.toString());
    display(inputArr.join(""));
    exArr.splice(0, exArr.length);
    exArr.push(result.toString());
  }
  // .replace("×", "*")
  // .replace("÷", "/")
  // .replace("Π", "Math.PI")
  // .replace("e", "Math.E")
  // .replace("log(", "Math.log10(")
  // .replace("ln(", "Math.log(")
  // .replace("√(", "Math.sqrt(");
  //   console.log(exArr);
});

// displaying the input to the display
function display(output) {
  input.value = output;
}

// evaluating expression array
equalBtn.addEventListener("click", () => {
  console.log(inputArr);
  console.log(exArr);
  // if (exArr.includes("→dms")) {
  //   input.value = exArr[exArr.length - 1];
  //   operArr.splice(0, operArr.length);
  //   exArr.splice(0, exArr.length);
  //   return;
  // }
  let calcExpression = exArr.join("");
  let result;
  // if (calcExpression.includes("|")) {
  //   calcExpression.replace("|", ")");
  // }
  try {
    console.log("hi");
    result = eval(calcExpression);
    console.log(result);
    // if (fixedToExp) {
    //   input.value = result.toExponential();
    // } else {
    display(result);

    // }
  } catch (e) {
    input.value = "Expression Error";
  }
  inputArr.splice(0, inputArr.length);
  exArr.splice(0, exArr.length);
  inputArr.push(result.toString());
  exArr.push(result.toString());
});

// backspace function
function backspace() {
  if (input.value == "Expression Error") {
    display("");
    inputArr.splice(0, inputArr.length);
    exArr.splice(0, exArr.length);
  } else {
    inputArr.pop();
    exArr.pop();
    display(inputArr);
  }
}

// allclear function
function allClear() {
  inputArr.splice(0, inputArr.length);
  exArr.splice(0, exArr.length);
  display(inputArr);
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

// function replace elements
function replaceElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "×":
        arr[i] = "*";
        break;
      case "÷":
        arr[i] = "/";
        break;
      case "Π":
        arr[i] = "Math.PI";
        break;
      case "e":
        arr[i] = "Math.E";
        break;
      case "log":
        arr[i] = "Math.log10";
        break;
      case "ln":
        arr[i] = "Math.log";
        break;
      default:
        break;
    }
  }
  return arr;
}
