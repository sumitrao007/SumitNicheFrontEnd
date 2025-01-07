
function onAddition(){
    let num1= document.getElementById("input1");
    let num2= document.getElementById("input2");
    
    let n1=parseInt(num1.value);
    let n2=parseInt(num2.value);

    let res=n1+n2;

    let displayData=document.getElementById("result");

    // displayData.innerHTML=res;

    displayData.innerHTML=`<h2>Your Result is :: ${res} </h2>`;

}

function onSubstraction(){
    let num1= document.getElementById("input1");
    let num2= document.getElementById("input2");
    let displayData=document.getElementById("result");
    
    let n1=parseInt(num1.value);
    let n2=parseInt(num2.value);

    let res=n1>n2?n1-n2:"Number is not Valid...";
    displayData.innerHTML=`<h2>Your Result is :: ${res} </h2>`;
}

function onDataChange(){
    let name= document.getElementById("myname");

    name.style.background="green";
    name.style.color="white";

}