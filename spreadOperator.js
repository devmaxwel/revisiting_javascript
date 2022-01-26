// Spread Operator && REST Operator
// it used to add elements off an existing array to a new array
const webCerts = ['Reactjs', 'Vuejs', 'Angularjs'];
const SoftwareEngineeringCerts = ['Mern stack','MVC achitecture', ...webCerts];
console.log("All certs: ", SoftwareEngineeringCerts);

// It used to pass array elements as arguments in a function

function addNumbers(a,b,c){

    console.log("Sum is: ",a+b+c);
};

const numbers = [1,2,5];

addNumbers(...numbers);

// copying values of array into another array

const array = [1,2,4];
const array2 = [...array]
array2.push(7)
console.log(array);
console.log(array2);

//Concatanate
 const array1 = [3,5,8]
 const array3 = [9,9,3]
 const arr = array1.concat(array3); 
//  or

const arr1 = [...array1, ...array3]
 console.log(arr1);

//  REST Operator
// Collects mutilple elements  and condense them into a single Array 

function multiply(multiplier, ...theArgs ){
    return theArgs.map((arg) => {
        return multiplier * arg
    })
}
const restArr = multiply(3, 3,5,6,7,8)

console.log(restArr)

const multiply1=(multiplier1, ...theArgs1)=>{
      return theArgs1.map((arg1) => {
          return multiplier1 * arg1
      })
}

const restArr1 = multiply1(2, 6,7,8,9,5);
console.log(restArr1);
