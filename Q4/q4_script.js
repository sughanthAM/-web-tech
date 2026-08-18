// q4_script.js

// User-defined function to calculate total, average, grade, and pass/fail
function calculateGrade() {
  // Step 1: Read marks from input fields (variables & data types: numbers)
  let sub1 = Number(document.getElementById("sub1").value);
  let sub2 = Number(document.getElementById("sub2").value);
  let sub3 = Number(document.getElementById("sub3").value);
  let sub4 = Number(document.getElementById("sub4").value);
  let sub5 = Number(document.getElementById("sub5").value);

  // Step 2: Validate input (Selection statement - if)
  if (sub1 < 0 || sub1 > 100 || sub2 < 0 || sub2 > 100 || sub3 < 0 || sub3 > 100 ||
      sub4 < 0 || sub4 > 100 || sub5 < 0 || sub5 > 100) {
    alert("Please enter valid marks between 0 and 100 for all subjects.");
    return; // exit function early
  }

  // Step 3: Calculate total using operators (+)
  let total = sub1 + sub2 + sub3 + sub4 + sub5;

  // Step 4: Calculate average using operator (/)
  let average = total / 5;

  // Step 5: Determine grade using if-else ladder (Selection statement)
  let grade = "";
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 40) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Step 6: Determine pass/fail status
  // A student fails if any subject is below 40 marks, OR average is below 40
  let status = "Pass";
  let subjects = [sub1, sub2, sub3, sub4, sub5];

  // Iteration statement - for loop to check each subject
  for (let i = 0; i < subjects.length; i++) {
    if (subjects[i] < 40) {
      status = "Fail";
      break; // stop checking once a fail condition is found
    }
  }
  if (average < 40) {
    status = "Fail";
  }

  // Step 7: Display result in the result div
  let resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <p><b>Total Marks:</b> ${total} / 500</p>
    <p><b>Average:</b> ${average.toFixed(2)}%</p>
    <p><b>Grade:</b> ${grade}</p>
    <p><b>Status:</b> <span class="${status === 'Pass' ? 'pass' : 'fail'}">${status}</span></p>
  `;
}