/*function count(n) { // 6 kyu Factorial length
  let arrayDigits = [];
  let resultNumber = 1;
  let result;

  for (let i = 1; i <= n; i++){
    arrayDigits.push(i);
  }

  for (let elem of arrayDigits){
    resultNumber *= elem;
  }

  result = String(resultNumber).split('');
  console.log(result.length);
  console.log(result);
  //return result.length;
}
count(50);*/

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty('checkProp') === true){
    //return checkProp.value;
    console.log(obj.checkProp);
  } else {
    //return "Not Found";
    console.log("Not Found");
  };
}

checkObj(myObj, myObj.top);

const myObj = {
  top: "hat",
  bottom: "pants"
};

alert('dddfd');