
// Elements

const formEle = document.getElementById("form");
const billEle = document.getElementById("bill");
const billErrorEle = document.getElementById("billError");
const peopleEle = document.getElementById("people");
const peopleErrorEle = document.getElementById("peopleError");
const tipEle = document.getElementById("tip");
const totalEle = document.getElementById("total");
const fivePercentEle = document.getElementById("fivePercent");
const tenPercentEle = document.getElementById("tenPercent");
const fifteenPercentEle = document.getElementById("fifteenPercent");
const twentyFivePercentEle = document.getElementById("twentyFivePercent");
const fiftyPercentEle = document.getElementById("fiftyPercent");
const customPercentEle = document.getElementById("custom");

//AddEventListeners
// // For FivePercentage Button  
fivePercentEle.addEventListener("click", function (e) {
  if (billEle.value === "") {
    e.preventDefault();
    billErrorEle.textContent = "Can't be zero";
    billErrorEle.classList.add("errorMsg");
  } else if (peopleEle.value === "") {
    e.preventDefault();
    peopleErrorEle.textContent = "Can't be zero";
    billErrorEle.textContent = " ";
    billErrorEle.classList.remove("errorMsg");
    peopleErrorEle.classList.add("pepErrorMsg");
  } else {
    e.preventDefault();
    let billValue = billEle.value;
    let peopleValue= peopleEle.value;
    tipValue = (billValue/peopleValue) * 0.05;
    totalValue = (billValue/peopleValue) + tipValue;
    totalEle.innerText= "$" + totalValue.toFixed(2);
    tipEle.innerText= "$" + tipValue.toFixed(2);
  }
});

// // For TenPercentage Button

tenPercentEle.addEventListener("click", function (e) {
  if (billEle.value === "") {
    e.preventDefault();
    billErrorEle.textContent = "Can't be zero";
    billErrorEle.classList.add("errorMsg");
  } 
  else if (peopleEle.value === "") {
    e.preventDefault();
    peopleErrorEle.textContent = "Can't be zero";
    billErrorEle.textContent = " ";
    billErrorEle.classList.remove("errorMsg");
    peopleErrorEle.classList.add("pepErrorMsg");
  } else {
    e.preventDefault();
    let billValue = billEle.value;
    let peopleValue= peopleEle.value;
    tipValue = (billValue/peopleValue) * 0.10;
    totalValue = (billValue/peopleValue) + tipValue;
    totalEle.innerText= "$" + totalValue.toFixed(2);
    tipEle.innerText= "$" + tipValue.toFixed(2);
  }
});

// // For FifteenPercentage Button

fifteenPercentEle.addEventListener("click", function (e) {
  if (billEle.value === "") {
    e.preventDefault();
    billErrorEle.textContent = "Can't be zero";
    billErrorEle.classList.add("errorMsg");
  } else if (peopleEle.value === "") {
    e.preventDefault();
    peopleErrorEle.textContent = "Can't be zero";
    billErrorEle.textContent = " ";
    billErrorEle.classList.remove("errorMsg");
    peopleErrorEle.classList.add("pepErrorMsg");
  } else {
    e.preventDefault();
    let billValue = billEle.value;
    let peopleValue= peopleEle.value;
    tipValue = (billValue/peopleValue) * 0.15;
    totalValue = (billValue/peopleValue) + tipValue;
    totalEle.innerText= "$" + totalValue.toFixed(2);
    tipEle.innerText= "$" + tipValue.toFixed(2);  }
});

// // For TwentyFivePercentage Button

twentyFivePercentEle.addEventListener("click", function (e) {
  if (billEle.value === "") {
    e.preventDefault();
    billErrorEle.textContent = "Can't be zero";
    billErrorEle.classList.add("errorMsg");
  } else if (peopleEle.value === "") {
    e.preventDefault();
    peopleErrorEle.textContent = "Can't be zero";
    billErrorEle.textContent = " ";
    billErrorEle.classList.remove("errorMsg");
    peopleErrorEle.classList.add("pepErrorMsg");
  } else {
    e.preventDefault();
    let billValue = billEle.value;
    let peopleValue= peopleEle.value;
    tipValue = (billValue/peopleValue) * 0.25;
    totalValue = (billValue/peopleValue) + tipValue;
    totalEle.innerText= "$" + totalValue.toFixed(2);
    tipEle.innerText= "$" + tipValue.toFixed(2);
    }
});

// // For FiftyPercentage Button

fiftyPercentEle.addEventListener("click", function (e) {
  if (billEle.value === "") {
    e.preventDefault();
    billErrorEle.textContent = "Can't be zero";
    billErrorEle.classList.add("errorMsg");
  } else if (peopleEle.value === "") {
    e.preventDefault();
    peopleErrorEle.textContent = "Can't be zero";
    billErrorEle.textContent = " ";
    billErrorEle.classList.remove("errorMsg");
    peopleErrorEle.classList.add("pepErrorMsg");
  } else {
    e.preventDefault();
    let billValue = billEle.value;
    let peopleValue= peopleEle.value;
    tipValue = (billValue/peopleValue) * 0.50;
    totalValue = (billValue/peopleValue) + tipValue;
    totalEle.innerText= "$" + totalValue.toFixed(2);
    tipEle.innerText= "$" + tipValue.toFixed(2);
    }
});

// // For Custom Button

customPercentEle.addEventListener("click", function (e) {
  if (billEle.value === "") {
    e.preventDefault();
    billErrorEle.textContent = "Can't be zero";
    billErrorEle.classList.add("errorMsg");
  } else if (peopleEle.value === "") {
    e.preventDefault();
    peopleErrorEle.textContent = "Can't be zero";
    billErrorEle.textContent = " ";
    billErrorEle.classList.remove("errorMsg");
    peopleErrorEle.classList.add("pepErrorMsg");
  } else {
    customPercentEle.addEventListener("input", function () {
    let billValue = billEle.value;
    let peopleValue= peopleEle.value;
    let customValue= customPercentEle.value;
    tipValue = (billValue/peopleValue) * (0.01*customValue);
    totalValue = (billValue/peopleValue) + tipValue;
    totalEle.innerText= "$" + totalValue.toFixed(2);
    tipEle.innerText= "$" + tipValue.toFixed(2);
    })}
});
