const form = document.querySelector("form");
form.addEventListener("submit",async(e)=>{
    try {
        e.preventDefault();
        const formData = new FormData(form);
        const {email,password} = Object.fromEntries(formData);

        if(Object.values(Object.fromEntries(formData)).some(el=>el==="")){
            throw new Error("Invalid input!")
        }
        else {
            const res = await fetch("http://localhost:3030/users/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            })

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message);
            }
            const data = await res.json();

            const user = {
                email: data.email,
                password: data.password,
                accessToken: data.accessToken,
                _id: data._id,
            }

            localStorage.setItem("userInfo", JSON.stringify(user))
            window.location = "./index.html"
        }
    }   catch (error){
        alert(error.message)
    }




})