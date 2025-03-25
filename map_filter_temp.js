// let arr =[1,35,45,88]

// arr.map(print)

// function print(num,index){
//      console.log(index)
// }

// let arr =[1,35,45,88]
// arr.map((n) => console.log(n))

let arr =[1,35,45,88,6,7,2]

// for(let i=0 ; i<arr.length;i++){
//     console.log(arr[i])
// }
  let even = arr.filter(n => n % 2 === 0)
  arr.filter(n => {return n % 2 === 0})   
  arr.filter((n)=> {
        return  n % 2 === 0
  })
  
 console.log(even)