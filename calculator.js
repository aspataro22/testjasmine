window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values  = { amount: 10000, years: 10, rate: 4.5 };
  const loanAmount = document.getElementById("loan-amount");
  loanAmount.value = values.amount;
  const loanYears = document.getElementById("loan-years");
  loanYears.value = values.years;
  const loanRate = document.getElementById("loan-rate");
  loanRate.value = values.rate;
  update();}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthlyPayment(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const num = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -num))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.

  function updateMonthlyPayment(monthly) {
    const finalPayment = document.getElementById("monthly-payment");
    finalPayment.innerText = "$" + monthly;
}
