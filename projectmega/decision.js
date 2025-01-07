document.getElementById('decisionForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the form from refreshing the page
  
    // Retrieve data from local storage
    const values = localStorage.getItem('values') ? localStorage.getItem('values').split(',') : [];
    const goals = localStorage.getItem('goals') ? localStorage.getItem('goals').split(',') : [];
    const avoid = localStorage.getItem('avoid') ? localStorage.getItem('avoid').split(',') : [];
    const dilemma = document.getElementById('dilemma').value;
  
    let advice = '';
  
    if (avoid.some(activity => dilemma.includes(activity.trim()))) {
      advice = 'Based on your values, it might be better to avoid this activity.';
    } else {
      advice = "This activity doesn't conflict with your goals. Proceed if you feel it's beneficial.";
    }
  
    document.getElementById('adviceOutput').innerText = advice;
  });
  
  // Function to save user input to local storage
  function saveUserData() {
    const values = document.getElementById('values').value;
    const goals = document.getElementById('goals').value;
    const avoid = document.getElementById('avoid').value;
  
    localStorage.setItem('values', values);
    localStorage.setItem('goals', goals);
    localStorage.setItem('avoid', avoid);
  }
  
  // Event listener for the Save button
  document.getElementById('saveButton').addEventListener('click', saveUserData);
  
  document.getElementById('saveButton').addEventListener('click', function () {
    const values = document.getElementById('values').value;
    const goals = document.getElementById('goals').value;
    const avoid = document.getElementById('avoid').value;

    // Save the values to localStorage
    localStorage.setItem('userValues', values);
    localStorage.setItem('userGoals', goals);
    localStorage.setItem('userAvoid', avoid);

    alert('Your preferences have been saved!');
});

