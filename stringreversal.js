
//thought processes on how to reverse a string...

//convert string to an array

function createArray(str)
{
    //the spread method will target the argument and push out an array
    let string = [...str]
    return string;
}

console.log(createArray('hello'));

//reverse an array 

function reverseArray(array) 
{
    //make an empty binding to push our reversed array order
    let result = '';
    //create a loop to cycle through the array by defining the length of the array 
    //then start at the end of the array until it gets to the head of the array
    for (let i = array.length - 1; i >= 0; i--) 
    {
        //at the end of each loop it will add indexed value to the empty result binding 
        //and since these are strings they wont go through addition augmentation
        result += array[i]
    }
    return result;
}
console.log(reverseArray(["1","2","3",'4','5']))

//reverse a string

function reverseString(str) 
{
  //create an empty string to contain all characters for reversed string
  let revStr = ''
  //first use spread to make str argument value an array
  let array = [...str];
  //create a loop to go through our new array formed from spread method
  for(let i = array.length-1; i >= 0 ; i--)
  {
    //add each indexed value to the empty revStr binding
    revStr+=array[i]
  }
  return revStr
}

console.log(reverseString("hello"));

