function name(){
    console.log("happy ")
    }
function greet(){
console.log("happy new year")
}
name()


function add(a,b,c){
    console.log(a+b)
    return 12345
}
   let new1=add(1,5) 
console.log(new1)


function sowmya(a,b){
    console.log("before return")

    return a+b
    console.log("after return")
}
console.log(sowmya(2,8))



//if no value is  returned by afunction  then the default value of the returned is  undefined



function sowmya(a,b,c){
console.log(a," ",b," ",c)

}console.log(sowmya(1,3,4))



function sowmya(a,...b)//rest operator only use at last parameter we should not use at "a" parameter
{                      
    console.log(a," ", b ," ")
    return "success"
}
console.log(sowmya(1,3,4,3,45,546,56))

function archu(a,b){
 console.log(" the values are a-b")
}
let yashu=archu(2,8)
console.log(yashu)


{
let a=2
console.log(a)
}



let ar=88
{
    let a=2
    }
    console.log(a)  



var a=22
{
    var a=2  
}
console.log(a)



for(let i=0;i<=101;i++){
    console.log(i)
}


let j=0
while (j<=2){
    console.log(j)
    j++
}



for(let i=0;Arr.length();i++){
    console.log(arr(i))}
//  (example for loop)





let arr1 = [23, 34, 44, 54, 64, 74, 76];
for (let i = 0; i < arr.length; i++) {
    console.log( arr1[i]);
}



let arr2 = [23, 34, 44, 54, 64, 74, 76];
for (let i = 0; i <=2; i++) {
    console.log(arr2[i]);
}


let arr3 = [23, 34, 44, 54, 64, 74, 76];
for (let i = arr.length-1 ; i >=0; i--) {
    console.log(arr3[i]);
}


let arr = [23, 34, 44, 54, 64, 74, 76];
let length =arr.length
console.log(length)
for (let i = (length-1) ; i>=0; i--) {
    console.log(arr[i]);
}









   































