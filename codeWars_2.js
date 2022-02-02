
function countLanguages(list) {
    let count = {};
    for (let x = 0; x < list.length; x++) {
      let currentCount = count[list[x].language] === undefined ? 0 : count[list[x].language];
      // let currentCount = count[i.language] || 0;
      count[list[x].language] = currentCount + 1;
    }
    return count;
  }

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

countLanguages(list1);
