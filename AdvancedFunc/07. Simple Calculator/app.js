function calculator() {
    const Obj = {
        init,
        add,
        subtract,
    }

    let sumSelector1 ;
    let sumSelector2 ;
    let result ;



    function init(selector1, selector2, resultSelector){
         sumSelector1 = document.querySelector(selector1);
         sumSelector2 = document.querySelector(selector2);
         result = document.querySelector(resultSelector);
    }
    function add(){
        result.value = Number(sumSelector1.value)+Number(sumSelector2.value)
    }
    function subtract(){
        result.value = Number(sumSelector1.value)-Number(sumSelector2.value)
    }

    return Obj;
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 





