function solve() {
    const taskInput = document.querySelector("#task");
    const descriptionInput = document.querySelector("#description");
    const dateInput = document.querySelector("#date");
    const[addSection,openSection,progressSection,completeSection] = document.querySelectorAll("section")
    const addBtn = document.querySelector("#add");
    addBtn.addEventListener("click",add);
    function add(event){
        event.preventDefault();
        if(taskInput.value){
            if(descriptionInput.value){
                if(dateInput.value){
                    
                    const newArticle = document.createElement("article");
                    const title = document.createElement("h3");
                    title.textContent = `${taskInput.value}`;
                    newArticle.appendChild(title)

                    const description = document.createElement("p");
                    description.textContent =`Description: ${descriptionInput.value}` ;
                    newArticle.appendChild(description)

                    const date = document.createElement("p");
                    date.textContent = `Due Date: ${dateInput.value}`;
                    newArticle.appendChild(date)

                    const div = document.createElement("div");
                    div.classList.add("flex")

                    const btn1 = document.createElement("button");
                    btn1.classList.add("green");
                    btn1.textContent = "Start"
                    btn1.addEventListener("click",start);

                    const btn2 = document.createElement("button");
                    btn2.classList.add("red");
                    btn2.textContent = "Delete"
                    btn2.addEventListener("click",deleteArticle);

                    div.appendChild(btn1);
                    div.appendChild(btn2);
                    newArticle.appendChild(div);

                    const divs = openSection.querySelectorAll("div");
                    divs[1].appendChild(newArticle);
                }
            }
        }
    }

    function start(event){
        //move the article
        const article = event.target.parentElement.parentElement;
        const divs = progressSection.querySelectorAll("div");
        const movedArticle =  divs[1].appendChild(article);


        const buttons = movedArticle.querySelectorAll("button");
        buttons[0].classList.remove("green");
        buttons[0].classList.add("red");
        buttons[0].textContent = "Delete";
        buttons[0].removeEventListener("click",start);
        buttons[0].addEventListener("click",deleteArticle)

        buttons[1].classList.remove("red");
        buttons[1].classList.add("orange");
        buttons[1].textContent = "Finish";
        buttons[1].removeEventListener("click",deleteArticle);
        buttons[1].addEventListener("click",finish);


        //clear the article from open section 
        event.target.parentElement.parentElement.removeChild(article);
    }
    
    function deleteArticle(event){
        const article = event.target.parentElement.parentElement;
        const div = event.target.parentElement.parentElement.parentElement;
        div.removeChild(article)
    }

    function finish(event){
        //move the article to finish section
        const article = event.target.parentElement.parentElement;
        article.removeChild(article.querySelector("div"))
        const divs = completeSection.querySelectorAll("div");
        divs[1].appendChild(article)
    }
}