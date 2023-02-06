 "use strict"

//  var, let, const

// var surname ="ismayilzade";

// var name = "cavid";

// // const isMarried=true;

// console.log(surname+""+name)

let  age=17;
let name ="cavid"
let isMarried=false

let address;
let phone =null;
console.log(age)
console.log(name)
console.log(isMarried)
console.log(address)
console.log(phone)


if(address==undefined){
    console.log("address underfied")

}
let stu={


    name:"cavid",
    surname:"ismayilzade"

}

// console.log(stu.name +""stu.surname)


// let students("cavid",100,true)
// console.log("cavid/"3);


for(let i=0;i<students.lenght;i++){
    console.log([i])
}

let username =prompt("add number")
console.log(username)

debugger

let isOnline=confirm("is he online")
console.log(isOnline)



let temp =5
if(temp<10){

    console.log("soyuqdur")

}else if (temp>20){
    console.log("istidir")

}else{
    console.log("hecbirsey")
}


let count =5;
switch(count){
  case 5:
  console.log("besh")
  break
  case 6:
    console.log("alti")
    break
   default:
    console.log("not found")





}

let addresss=null
let result =addresss??"Ehmedli"
console.log(result);
if(addresss==null){
    console.log("ehmedli")
}else{
    console.log(addresss)
}



let res =addresss==null?"ehmedli":addresss