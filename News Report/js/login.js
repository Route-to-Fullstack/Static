function validate()
{
var username=document.getElementById("email").value;
var password=document.getElementById("password").value;
if(username="user@abc.com"&& password =="user")
{
    alert("login succesfully");
    return false;
}
else
{
    alert("login failed");
}
}