function rectangle (width,height,color){
     color = color.charAt(0).toUpperCase()+color.slice(1)
const obj = {
    width,
    height,
    color,
    calcArea(){
        return height*width
    }
}
obj.color
return obj

}
rectangle()