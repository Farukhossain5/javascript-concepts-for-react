// most esential javascript concepts for starting react, the javascript library

// The Variable
const name = 'faruk';
let age = 21;
age = 22;
console.log(age);

// The Loops(for loop)
let nums = [33, 45, 56, 654, 7, 5, 6, 44, 65];
for (let i = 0; i < nums.length; i++){
    const num = nums[i];
    console.log(num)
}
  
// The function 
function multiply(num1, num2) {
    const math = num1 * num2;
    return math;
}
const result = multiply(44, 44);
console.log(result);

// The Objects
const person = {
    name: 'MD Faruk Hossain',
    age: 21,
    hobby: ['reading', 'tech enthugias', 'proggramar'],
}
console.log(person['age']);