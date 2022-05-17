//Preliminaries

//Write a for loop that prints to the console the numbers 0 through 9
for (var i=0; i<=9; i++){
    console.log(i);
}

//Write a for loop that prints to the console 9 through 0

for(var i=9; i>=0; i--){
    console.log(i);
}

//Write a for loop that prints  fruits to the console
const fruit = ["banana", "orange", "apple", "kiwi"];
for(var i=0; i<fruit.length; i++){
    console.log(fruit[i]);
}

//Bronze medal
//Write a for loop that will push the numbers 0 through 9 to an array
var number=[];
for(var i=0; i<=9; i++){
    number[i]=i;
}
console.log(number);

//Write a for loop that prints to the console only even numbers 0 through 100
for(var i=0; i<=100; i+=2){
    console.log(i);
}

//Write a for loop that will push every other fruit to an array
const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var pushedFruit=[];
for(var i=0; i<fruits.length; i++){
    pushedFruit[i]=fruits[i];
}
console.log(pushedFruit);

//Silver medal
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//Write a loop that will print out all the names of the people of the people array
for(var i=0; i<peopleArray.length; i++){
    console.log(peopleArray[i].name);
}

//Write a loop that pushes the names into a names array, and the occupations into an occupations array
var names=[];
var occupations=[];
for(var i=0; i<peopleArray.length; i++){
    names[i]=peopleArray[i].name;
    occupations[i]=peopleArray[i].occupation;
}
console.log(names);
console.log(occupations);

//Write a loop that pushes every other name to an array starting with the first person, 
//in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer"
var occupation1=[];
for(var i=0; i<occupations.length;){
    if(occupations[i]==="Singer"){
        occupation1[i]=occupations[i-1];
        occupation1[0]=occupations[i];
        i++;
    }
    else{
        occupation1[i]=occupations[i];
        i++;
    }
}
console.log(occupation1);

//1.Create an array that mimics a grid like the following using nested for loops:
//console.log(array[i][j])
var array=[];
//setting the elements of "array" to arrays
for(var i=0; i<3; i++){
    array[i]=[];
}
//asigning the values
for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        array[i][j]=0;
    }
}
console.log(array);

//2.Create an array that mimics a grid like the following using nested for loops:
for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        array[i][j]=i;
    }
}
console.log(array);

//3.Create an array that mimics a grid like the following using nested for loops:

for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        array[i][j]=j;
    }
}
console.log(array);

//4.Given a grid like the previous ones, write a nested for loop that would change every number to an x.
var array2=[];
var arrayElements=5;
var elementsLength=5;

for(var i=0; i<arrayElements; i++){
    array2[i]=[];
}


for(var i=0; i<arrayElements; i++){
    for(var j=0; j<elementsLength; j++){
        array2[i][j]="x";
    }
}
console.log(array2);