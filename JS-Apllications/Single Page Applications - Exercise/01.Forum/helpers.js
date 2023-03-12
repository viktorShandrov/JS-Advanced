function createTopicElement(type,attr,textContent){
const element = document.createElement(type)
    if(attr) {
        for (const attribute of Object.keys(attr)) {
            element.setAttribute(attribute, attr[attribute])
        }
    }

    if(textContent){
        element.textContent = textContent;
    }
    return element
}





export{
    createTopicElement,

}
