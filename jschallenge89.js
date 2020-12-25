//Basic JavaScript: Testing Objects for Properties ch.89

//this wasnt in the challenge originally

var obj = {
gift: “pony”,
pet: “kitten”,
bed: “sleigh”
};

function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];  //--- what is checkProp?
  } else {
    return "Not Found";
  }
}
/*if i put the function inside of the varible would i be able to get around dumping the whole object into the function in order to test for 
  its properties? */
/* Challenge Prompt: Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). 
 If the property is found, return that property's value. If not, return "Not Found". */
