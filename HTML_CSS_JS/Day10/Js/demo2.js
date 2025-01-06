
function alertbox(){
    alert("Alert Box is Called....");
}

function promptbox(){
   let strName= prompt("Enter the Name:: ");
   alert("Hi, "+strName);
}

function confirmbox(){

    if(confirm("Do you want delete This Record...")){
      alert("Record Delete Successfully...");  
    }else{
        alert("Thank You Visit again...");
    }
}