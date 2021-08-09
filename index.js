const o = {
   a:"a",
   b:"b"
}
const o2 = o


o2.a= 'new value'
console.log(o.a)

//pushing values in to an empty  arrey:
arr = []
console.log(arr)
arr.push('value')
console.log(arr)
arr.push('value2')
console.log(arr)
arr[2]="value3"
console.log(arr)
//changing strings to uppar case
const str = 'string'
str.toUpperCase()
console.log(str.toUpperCase())


function mfa() {
   const arri = []
   for (var i =0; i<5; i++){
      arri.push(function () { console.log(i)
         
      })
   }
   return arri
}

const functionArr = mfa()
console.log(functionArr[0]())


const  x =[0,1,2,3]
function addOne (number){ number = number +11
return number}



console.log(addOne(3))

console.log(x.map(addOne))


function  isGreaterThanOne(num){ return num >9

}

console.log(isGreaterThanOne(0))
console.log(x.filter(isGreaterThanOne))




var ourArray = []
for(var i = 0; i<20;i++){
   ourArray.push(i)
   if (i>20) {
      break
      
   }
}
console.log(ourArray)
var beb =ourArray
console.log(ourArray.map(addOne))
console.log(ourArray.filter(isGreaterThanOne))

var arrr=[6,9,8,7,6]
for (var i= 0; i < arrr.length; i++) {
   console.log(arrr[i]);
   
}

const inventory = {
   sunglasses: 1900,
   pants: 1088,
   bags: 1344
 };
 
 // Write your code below:
 const myExecutor= (resolve,reject)=>{
   if(inventory.sunglasses>0){
     console.log(resolve('Sunglasses order processed.'))
   }
   else {
     reject("'That item is sold out.")
   }
 
 }

 //IFFE
 (favNumber = function (num =75745678563){ console.log(" my favorate number is " + num)})
 ();

 var a = 4;

 (function (){
    var a = 8
    console.log(a)
 })();
 console.log(a)
 let b = 11;

 {
    let b = 9
    console.log(b)
 }

 console.log(b)
 function addOnes (rqm){ return rqm +1}
 function getNum (){ return addOne(10)}
 function c () { console.log( getNum ()+getNum())}
 c()

 const person = {
    name: "Jordan", 
    greet: function () { console.log("Hello "+ this.name)
       
    }
 }
person.greet()
const  greet = person.greet 
const object = {
   a: 5,
   b: 7
  }
  const thisFunction = function(c, d) {
   return this.a + this.b + c + d;
  }
  thisFunction.call(object, 12, 4);
  //will return 28
  thisFunction.apply(object, [3, 6]);
  //will return 21
  



