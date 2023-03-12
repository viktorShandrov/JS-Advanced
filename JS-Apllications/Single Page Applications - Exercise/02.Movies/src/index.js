const body = document.querySelector("body");
let nav = null;
let homeBtn=null;
let welcomeP =null;
let logoutBtn =null;
let loginBtn =null;
let registerBtn =null;

const navFuncs = {
    register(){
        body.replaceChildren(nav,formSignUppSection,footer);
        navFuncs.getAllNavElementsAndSetListeners(["welcome","logout"]);
        const form = document.querySelector("#register-form");
        form.addEventListener("submit",registerUser)
        function registerUser(e) {
            e.preventDefault()
            try {
                const formData = Object.fromEntries(new FormData(form));
                if (formData.email === "" || formData.password !== formData.repeatPassword||formData.password.length<6) {
                    throw  new Error("Invalid inputs!")
                }
                const userInfo = {
                    email:formData.email,
                    password:formData.password
                }
                localStorage.setItem("userInfo",JSON.stringify(userInfo))
                navFuncs.home();
            } catch (error) {
                alert(error.message)
            }
        }
    },
    login(){
        body.replaceChildren(nav,formLoginSection,footer)
        navFuncs.getAllNavElementsAndSetListeners(["welcome","logout"]);

        const form = document.querySelector("#login-form");
        form.addEventListener("submit",loginUser)

        function loginUser(e){
            e.preventDefault()
            try{
            const formData = Object.fromEntries(new FormData(form));
            const registeredUserInfo =JSON.parse(localStorage.getItem("userInfo"));
                if(!registeredUserInfo||formData.email!==registeredUserInfo.email||formData.password!==registeredUserInfo.password){
                    throw new Error("No such user")
                }
                navFuncs.home();
            }catch(error){
                alert(error.message)
            }
        }


    },
    home(){
        body.replaceChildren(nav,homePageSection,footer)

        if(localStorage.getItem("userInfo")){
        const {email} = JSON.parse(localStorage.getItem("userInfo"));
        navFuncs.getAllNavElementsAndSetListeners(["register","login"]);
        welcomeP.textContent=`Welcome, ${email}`
        }else{
            navFuncs.getAllNavElementsAndSetListeners(["welcome","logout"]);
        }

        const movieList = allMoviesSection.querySelector("#movies-list");
        movieList.appendChild(movieExampleSection)
    },
    logout(){
        navFuncs.login();
        localStorage.clear()
    },
    getAllNavElementsAndSetListeners(disabledBtns){
        //getting the nav elements
        nav = document.querySelector("nav");
        homeBtn = nav.querySelector(".navbar-brand");
        welcomeP = nav.querySelector("#welcome");
        logoutBtn = nav.querySelector("#logout");
        loginBtn = nav.querySelector("#login");
        registerBtn = nav.querySelector("#register");

        homeBtn.style.display="block";
        welcomeP.style.display="block";
        logoutBtn.style.display="block";
        loginBtn.style.display="block";
        registerBtn.style.display="block";
        if(disabledBtns) {
            for (const disabledBtn of disabledBtns) {
                const btn = nav.querySelector(`#${disabledBtn}`);
                btn.style.display = "none";
            }
        }

        registerBtn.addEventListener("click",navFuncs.register)
        homeBtn.addEventListener("click",navFuncs.home)
        loginBtn.addEventListener("click",navFuncs.login)
        logoutBtn.addEventListener("click",navFuncs.logout)
    }

}




//get all sections and dis-attach them after initialisation
        nav = document.querySelector("nav");

const homePageSection = document.querySelector("#home-page");
const addMovieSection = document.querySelector("#add-movie");
const allMoviesSection = document.querySelector("#movie");
const movieExampleSection = document.querySelector("#movie-example");
const editMovieSection = document.querySelector("#edit-movie");
const formLoginSection = document.querySelector("#form-login");
const formSignUppSection = document.querySelector("#form-sign-up");

const footer =  document.querySelector(".page-footer");

navFuncs.login()






