function getArticleGenerator(articles) {
    const divContent = document.querySelector("#content");
    function showNext(){
        if(articles.length>0){
            let newArticle = document.createElement("article");
            newArticle.textContent = articles.shift();
            divContent.appendChild(newArticle)
        }
    }
    return showNext;
}
