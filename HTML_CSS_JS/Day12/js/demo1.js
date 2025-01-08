
function validation(){

    // console.log("Function is called...")

    let username=document.getElementById("username").value;
    let usernameError=document.getElementById("userError");

    let password=document.getElementById("password").value;
    let passwordError=document.getElementById("passwordError");

    let confirmpassword=document.getElementById("confirmpassword").value;
    let confirmpasswordError=document.getElementById("confirmpasswordError");


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
    }
    


    return true;
}