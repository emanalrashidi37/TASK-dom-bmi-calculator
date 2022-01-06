function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  // challenge1 

  height = height / 100;
  BMI = weight / (height * height);
  
  alert(BMI)

  //challenge2
  if(weight < 18.5){
    alert("underwight")
  }
  else if ( weight >= 18.5 && weight >= 24.9){
    alert("healthyweight");
  }
  else if ( weight >= 25 && weight <= 29.9){
    alert("overweight");
  }
  else ( weight >= 30 )
    alert("Above Obesity");
  

}
