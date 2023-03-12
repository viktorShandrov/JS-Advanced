const registerForm = document.querySelector("form");
registerForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const formData = new FormData(registerForm);
    const {email,password,rePass} = Object.fromEntries(formData);

        try{
            if(Object.values(Object.fromEntries(formData)).some(el=>el==="")){
                throw new Error("Invalid input!")
            }else if(password!==rePass){
                throw new Error("Passwords must match!")
            }else{
            const res = await fetch("http://localhost:3030/users/register",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password,
                })
            })

            if(!res.ok){
                const error = await res.json();
                throw new Error(error.message);
            }
            const data = await res.json();

            const user = {
                email:data.email,
                password:data.password,
                accessToken:data.accessToken,
                _id:data._id,
            }

            localStorage.setItem("userInfo",JSON.stringify(user))
                window.location="./index.html"
          }
        }catch (error){
            alert(error.message)
        }





})
