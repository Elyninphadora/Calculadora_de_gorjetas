function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById("bill").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let numberPeople = document.getElementById("people").value;

  if ((bill == "") | (serviceQual == 0)) {
    alert("Por favor, preencha os valores");
  }

  if ((numberPeople == "") | (numberPeople <= 1)) {
    numberPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  let total = (bill * serviceQual) / numberPeople;
  total = total.toFixed(2);
  document.getElementById("tip").innerHTML = total;
  document.getElementById("totalTip").style.display = "block";
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculateTip);
