
function validate(){
    var username=document.getElementById("email").value;
    var password=document.getElementById("psw").value;
    if(username=="admin@gonow.com" && password=="admin"){
        alert("login successfully");
        return false
    }
    else{
        alert("login failed");
    }

}