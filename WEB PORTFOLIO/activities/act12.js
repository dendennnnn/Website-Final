function calculate() {

  const num1 = parseInt(document.getElementById("num1").value);
  const sumElement = document.getElementById("sum");
  let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  sumElement.className = "";
  let result = letter.slice(0, num1);
  let display = result.join(",");


  if (isNaN(num1)) {
      sumElement.className = "error"; 
      sumElement.innerHTML = "Please Input Number"; 
      return;
  }

  if (num1 < 0 || num1 > 26) {
      sumElement.className = "error"; 
      sumElement.innerHTML = "Limit Number"; // 
      return;
  }
  sumElement.innerHTML = "Result is: " + display ;
}

function clearFields() {

  const sumElement = document.getElementById("sum");
  sumElement.innerHTML = " ";
  sumElement.className = " ";
}
