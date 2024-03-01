function showpass(){
    var toggle = document.getElementById("mypassword");
    if(toggle.type === "password"){
        toggle.type = "text";
    }
    else{
        toggle.type = "password";
    }
}