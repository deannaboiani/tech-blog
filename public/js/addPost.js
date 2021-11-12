const postForm = document.querySelector("#post-form");

//TODO: collect data from login form, make post request to log in user.  
//TODO: once you get an ok response, redirect to the profile page

postForm.addEventListener("click",(evt)=>{
    evt.preventDefault();
    console.log("clicked")
    // const userObj={
    //     email:document.querySelector("#email").value,
    //     password:document.querySelector("#password").value,
    // }
    // fetch("/api/users/login",{
    //     method:"POST",
    //     body:JSON.stringify(userObj),
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // }).then(res=>{
    //     if(res.ok){
    //        location.href = "/home"
    //     } else {
    //         console.log(userObj)
    //         alert("username or password is incorrect!")
    //     }
    // })
})
