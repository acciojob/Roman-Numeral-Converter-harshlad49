function convertToRoman(num) {
  if (num <= 0) return "N/A"; // Romans had no symbol for zero or negatives
  if (num > 100000) return "Limit Exceeded";

  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";

  for (let [roman, value] of romanMap) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

function handleConvert() {
  const input = document.getElementById("numberInput").value;
  const output = document.getElementById("output");
  const number = parseInt(input, 10);

  if (isNaN(number)) {
    output.textContent = "Please enter a valid number.";
    return;
  }

  const romanNumeral = convertToRoman(number);
  output.textContent = `Roman Numeral: ${romanNumeral}`;
}
