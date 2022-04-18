//Preliminaries

if(5>3){
    console.log("is greater than");
}

var str="cat";
if(str.length===3){
    console.log("3 is the length");
}

if("cat"==="dog"){
    console.log("they are the same");
}else{
    console.log("they are not the same");
}

//Bronze medal

var person = {
    name: "Bobby",
    age: 12
};

if(person.age>=18){
    console.log(person.name+" "+"is allowed to go to the movie");
}else{
    console.log(person.name+" "+"is not allowed to go to the movie");
}

if(person.name[0]==="B"){
    console.log(person.name+" "+"is allowed to go to the movie");
}else{
    console.log(person.name+" "+"is not allowed to go to the movie");
}

if(person.name[0]==="B"&&person.age>=18){
    console.log(person.name+" "+"is allowed to go to the movie");
}else{
    console.log(person.name+" "+"is not allowed to go to the movie");
}

//Silver medal

if(1==="1"){
    console.log("Strict");
}else if(1=="1"){
    console.log("Loose or Abstract");
}else{
    console.log("Not equal at all");
}

if(1<=2&&2===4){
    console.log("YES");
}else{
    console.log("NO");
}

//Gold medal

var dog="dog";
var bool=true;
if(typeof dog==="string"){
    console.log("Variable 'dog' is a string");
}
if(typeof bool==="boolean"){
    console.log("Variable 'bool' is boolean");
}

var elem;

if(typeof elem==="undefined"){
    console.log("Variable 'elem' is not defined");
}else{
    console.log("Variable 'elem' is defined");
}

if("s">12){
    console.log("YES");
}else{
    console.log("NO");
}

var number=12;
console.log((number%2)? "odd" : "even");

