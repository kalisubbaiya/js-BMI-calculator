let btn1=document.getElementById("btn");
btn1.addEventListener("click", myFunct);
function myFunct(){
    let weight1=parseInt(document.getElementById("weight").value);
    let height1=parseInt(document.getElementById("height").value)/100;
    let bmi=weight1/(height1*height1);
    let element=document.getElementById("result");
    element.style.textAlign="center";
    if(bmi < 18){
        element.style.color="red";
        document.getElementById("result").innerText="Under Weight!";
        console.log("Your bmi is " + bmi + " kg/m2");       
    }
    else if(bmi > 18 && bmi < 25){
        element.style.color="green";
        document.getElementById("result").innerText="Healthy Weight!";
        console.log("Your bmi is " + bmi + " kg/m2");       
    }
    else{
        element.style.color="yellow";
        document.getElementById("result").innerText="Over Weight!";
        console.log("Your bmi is " + bmi + " kg/m2");       
    }
}