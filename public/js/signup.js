const loginForm = document.querySelector("#login-form");

//TODO: collect data from login form, make post request to log in user.  
//TODO: once you get an ok response, redirect to the profile page

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userObj={
        username:document.querySelector("#username").value,
        password:document.querySelector("#password").value,
        email:document.querySelector("#email").value,
    }
    fetch("/api/users/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/home"
        } else {
            console.log(userObj)
            alert("form not filled out correctly or name already taken!")
        }
    })
})