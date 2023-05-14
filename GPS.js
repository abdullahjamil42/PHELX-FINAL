function calculateGPA() {
    var creditHours = parseFloat(document.getElementById('credit-hours').value);
    var totalPoints = parseFloat(document.getElementById('total-points').value);
  
    if (isNaN(creditHours) || isNaN(totalPoints)) {
      document.getElementById('result').innerText = "Please enter valid numbers for credit hours and total points.";
      return;
    }
  
    if (creditHours <= 0) {
      document.getElementById('result').innerText = "Credit hours should be greater than zero.";
      return;
    }
  
    var gpa = totalPoints / creditHours;
    document.getElementById('result').innerText = "Your GPA is: " + gpa.toFixed(2);
  }