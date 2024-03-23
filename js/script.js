
function showDiolog(){
    document.getElementById("inputbtn").innerHTML = "";
    document.getElementById("outputbtn").innerHTML = "";
  }


document.getElementById("concatenate").onclick = function () {
    let message = "Aslam o Alikum ";
    let name = "M Awais";

    alert(message + name + "!");
    document.getElementById("inputbtn").innerHTML = "Aslam o Alikum M Awais !";
    document.getElementById("outputbtn").innerHTML = "";
}


document.getElementById("askn").onclick = function () {
    let firstname = prompt("Enter Your name");
    alert("Thanks  " + firstname );
    document.getElementById("inputbtn").innerHTML = " Thanks  " + firstname;

}


document.getElementById("comp").onclick =  function () {
    let num1 = 18;
    let num2 = 16;
    if ( num1 > num2) {
        alert (" Yes, your condition is true")
    }

    let num3 = 36;
    let num4 = 36;
    if ( num3 >= num4) {
        alert ( " 'Yes, your condition is true. The 36 = 36")
    }
    document.getElementById("inputbtn").innerHTML = `  num1 = ${num1} <br/> num2 = ${num2}   <br/> ${num1} > ${num2}  <br/>  num3 = ${num3} <br/> num4 = ${num4} `
    document.getElementById("outputbtn").innerHTML =   "36=36"
    
}


document.getElementById("show").onclick = function () {
let num1 = 35;
let num2 = 33;
if( num1 <= num2) {
    alert(" Yes, your condition is true.")
} else if ( num1 == num2){
    alert ("Yes, your second condition is true.")
} else if (num1 >= num2 ){
alert("Yes, your third condition is true.")
}
else {
    alert("No, your condition id false.")
}
document.getElementById("inputbtn").innerHTML = `  num1 = ${num1} <br/> num2 = ${num2}   <br/>First condition   ( ${num1} <= ${num2} ) <br/>Second condition   ( ${num1} == ${num2} )  <br/> Third condition   ( ${num1} >= ${num2} ) `
document.getElementById("outputbtn").innerHTML = "Third condition is true.";
}


document.getElementById("test").onclick = function () {
    let age = prompt(" Enter your age? ");
    let weight = prompt (" Enter Your weight?");

    if ( age >=18 && weight <=70){
        alert(" You're a smart man.");
        document.getElementById("inputbtn").innerHTML = `age = ${age} <br/> weight = ${weight} `
document.getElementById("outputbtn").innerHTML = "You're a smart man."
    }else if ( age >=18 && weight > 70) {
        alert("You're a fat guy.")
        document.getElementById("inputbtn").innerHTML = `age = ${age} <br/> weight = ${weight} `
document.getElementById("outputbtn").innerHTML = "You're a fat guy."
    }else {
        alert(" You're a small boy.")
        document.getElementById("inputbtn").innerHTML = `age = ${age} <br/> weight = ${weight} `
document.getElementById("outputbtn").innerHTML =" You're a small boy."
    }
 
}


document.getElementById("state").onclick = function () {

    let age = prompt("Enter your age? ");

    if ( age >=18 ) {
        let weight = prompt ("Enter your weight?");

        
    if (weight <=70){
        alert("You're a smart man.");
        document.getElementById("inputbtn").innerHTML = `age = ${age} <br/> weight = ${weight} `
        document.getElementById("outputbtn").innerHTML = " You're a smart man.";

    }else {
        alert("You're  a fat guy.")
        document.getElementById("inputbtn").innerHTML = `age = ${age} <br/> weight = ${weight} `
        document.getElementById("outputbtn").innerHTML = " You're a fat guy.";
    }
    } else {
    alert("You're a small boy.")
    document.getElementById("inputbtn").innerHTML = `age = ${age} <br/> weight = ${weight} `
    document.getElementById("outputbtn").innerHTML = " You're a small boy.";

    }
}


document.getElementById("logi").onclick = function () {
    let username = prompt("Enter  User Name");
    let pass = prompt("Enter User Password");
    if ( username === "Awais" && pass === "123456"){
        alert("User are logged in")
    }
    document.getElementById("inputbtn").innerHTML = "User Name = Awais <br/> Password is 123456."
}
