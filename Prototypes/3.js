function extensibleObject () {
    function ExntensibleObject () {}
    ExntensibleObject. prototype. extend = function (template) {
    Object.entries(template).forEach(([key, value]) => {
        if (value instanceof Function) {
            Object.getPrototypeOf(this)[key] = value;
        } else {
            this[key] = value;
        }
    });
}
return new ExntensibleObject();
}

const myObj = extensibleObject();

const template = {
    extesnionMethod: function () {
    },
    extensionProperty: 'something ",
}
    myObj.extend(template);

