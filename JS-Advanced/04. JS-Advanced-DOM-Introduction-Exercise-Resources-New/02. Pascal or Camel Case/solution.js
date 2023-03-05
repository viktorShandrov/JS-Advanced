function solve() {
  let string = document.getElementById('text').value
  let targetConvension = document.getElementById('naming-convention').value
  function camelCase(input) {
    const arr = input.split(" ")
    for (let index = 0; index < arr.length; index++) {
      arr[index] = arr[index].toLowerCase();
    }
    for (let index = 1; index < arr.length; index++) {
      arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1)
    }
    return arr.join("")
  }

  function PascalCase(input) {
    const arr = input.split(" ")
    for (let index = 0; index < arr.length; index++) {
      arr[index] = arr[index].toLowerCase();
    }
    for (let index = 0; index < arr.length; index++) {

      arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1)
    }
    return arr.join("")
  }
  const convensions = {
    "Camel Case": camelCase,
    "Pascal Case": PascalCase,
  }
  if (convensions.hasOwnProperty(targetConvension)) {
    document.getElementById("result").textContent = convensions[targetConvension](string);
  } else {
    document.getElementById("result").textContent ="Error!";
  }
}
