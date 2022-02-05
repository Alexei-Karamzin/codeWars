function getCount(str) {
  //debugger
  let vowelsCount = 0;
  let num = ['e', 'u', 'i', 'o', 'a'];
  let arr = str.split('');
  for (let elem of arr){
    for (let i = 0; i<=arr.length; i++){
      if(elem == num[i]){
        vowelsCount++;
        console.log(elem, num[i]);
      } 
    }
  }
  //return vowelsCount;
  console.log(vowelsCount);
}

getCount("abracadabra");

