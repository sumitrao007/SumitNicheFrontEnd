
function validation(){

    // console.log("Function is called...")

    let username=document.getElementById("username").value;
    let usernameError=document.getElementById("userError");

    let password=document.getElementById("password").value;
    let passwordError=document.getElementById("passwordError");

    let confirmpassword=document.getElementById("confirmpassword").value;
    let confirmpasswordError=document.getElementById("confirmpasswordError");

    let mobileNo=document.getElementById("mobileno").value;
    let mobileError=document.getElementById("mobileError");

    let email=document.getElementById("email").value;
    let emailError=document.getElementById("emailError");

    console.log("Email Length:: "+(email.length-4));

    if(username.trim()==""){
        //alert("Username should not be blank");
        usernameError.innerHTML="**Username should not be blank"
        return false;
    }else if(username.trim().length<3 || username.trim().length>6)
    {
        usernameError.innerHTML="**Username min charcter 3 & max 6"
        return false;
    }else if(password.trim()==""){
        //alert("Username should not be blank");
        passwordError.innerHTML="**password should not be blank"
        return false;
    }else if(confirmpassword.trim()==""){
        //alert("Username should not be blank");
        confirmpasswordError.innerHTML="**Confirm password should not be blank"
        return false;
    }else if (password.trim()!=confirmpassword.trim()){
        confirmpasswordError.innerHTML="**password & confirm Password should be same.."
        return false;
    }else if(mobileNo.trim()==""){
        mobileError.innerHTML="** Mobile No. should not be Blank";
        return false;
    }else if(mobileNo.trim().length>12 || mobileNo.trim().length<10){
        mobileError.innerHTML="** Mobile No. should minimum 10 digit & max 12 digit";
        return false;
    }else if(email.trim()==""){
        emailError.innerHTML="** Email ID should not be Blank";
        return false;
    }else if(email.startsWith("@",0)){ 
  
        emailError.innerHTML="** Enter the valid Email ID!!!";
        return false;
    }else if(email.charAt(email.length-4)!="."){
        emailError.innerHTML="** Please Enter the Appropriate Email ID!!!";
        return false;
      }
    


    return true;
}