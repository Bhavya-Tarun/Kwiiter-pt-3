var user_ID = "";

function logIN(){
    user_ID = document.getElementById("user-id").value;
    localStorage.setItem("user_ID", user_ID);
    console.log(user_ID);
    window.location = "index(kwi2).html";
}