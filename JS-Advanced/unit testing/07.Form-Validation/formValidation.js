function validate() {
    const usernameInput = document.querySelector("#username");
    const emailInput= document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const confirmPasswordInput = document.querySelector("#confirm-password");
    const checkBox = document.querySelector("#company");
    const companyInfoField = document.querySelector("#companyInfo");
    const companyInput = document.querySelector("#companyNumber")
    const registerForm = document.querySelector("#registerForm");
    const validDiv = document.querySelector("#valid");

    const usernamePattren = /^[a-zA-Z0-9]{3,20}$/
    const passwordPattern = /^[\w]{5,15}$/
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    
    
    checkBox.addEventListener("click",()=>{
        if(checkBox.checked){
            companyInfoField.style.display = "block"
        }else{
            companyInfoField.style.display = "none"
            companyInfoField.value = "";
        }
    });
    
    registerForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        let isUsernameValid = false;
        let isEmailValid = false;
        let isPasswordValid = false;
        let arePasswordMatching = false;
        let isCompanyNumberValid = false;
        if(!usernamePattren.test(usernameInput.value)){
            usernameInput.style.borderColor = "red";
            //isUsernameValid = false;
        }else{
            usernameInput.style.border = "none"
            isUsernameValid = true;
        }

        if(!emailPattern.test(emailInput.value)){
            emailInput.style.borderColor = "red"
            //isEmailValid = false;
        }else{
            emailInput.style.border = "none"
            isEmailValid=true;
        }

        if(!passwordPattern.test(passwordInput.value)||passwordInput.value !== confirmPasswordInput.value){
            passwordInput.style.borderColor = "red"
            confirmPasswordInput.style.borderColor = 'red';
            //isPasswordValid=false;
            //arePasswordMatching = false;
        }else{
            passwordInput.style.border = "none"
            confirmPasswordInput.style.border = "none";
            isPasswordValid=true;
            arePasswordMatching = true;
        }

        // if(passwordInput.value !== confirmPasswordInput.value){
        //     passwordInput.style.borderColor = "red"
        // }else{
        //     if(passwordPattern.test(passwordInput.value)){
        //         passwordInput.style.border = "none";
        //     }
        // }
        if(checkBox.checked){
            if(Number(companyInput.value)>1000&&Number(companyInput.value)<9999){
                isCompanyNumberValid = true;
            }else{
                companyInput.style.border = "none";
                //isCompanyNumberValid = false;
            }
        }else{
            isCompanyNumberValid = true;
        }



        if(isUsernameValid&&isEmailValid&&isPasswordValid&&arePasswordMatching&&isCompanyNumberValid){
            validDiv.style.display = "block";
        }else{
            validDiv.style.display = "none";
        }
    })


}
