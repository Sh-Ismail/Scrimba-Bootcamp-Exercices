//Write a function that accepts two numbers as parameters, and returns the sum.

function sumOfTwoNumbers(number1, number2){
    var sumOf=number1+number2;
    return sumOf;
}

var sumOfTwo=sumOfTwoNumbers(155,230);
console.log(sumOfTwo);

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function largestNumberOfThree(num1,num2,num3){
    if(num1>num2&&num1>num3){
        return num1;
    }else if(num2>num1&&num2>num3){
        return num2;
    }else if(num3>num1&&num3>num2){
        return num3;
    }
}

var biggest=largestNumberOfThree(15,9,11);
console.log(biggest);

//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function evenOrOdd(number){
    if(number%2===0){
        return true;
    }else{
        return false;
    }
}

var isEven=evenOrOdd(17);
if(isEven===true){
    console.log("Even!");
}else{
    console.log("Odd!");
}

//Write a function that accepts a string as a parameter. If the length of the
//string is less than or equal to twenty characters long, return the string
//concatenated with itself (string + string). If the string is more than
//twenty characters long, return the first half of the string.

function lengthOfString(string){
    if(string.length<20){
        var conc=string.concat(string);
        return conc;
    }else if(string.length>20){
        var slic=string.slice(0,string.length/2);
        return slic;
    }
}

str=lengthOfString("Write a function that accepts a string as a parameter.");
console.log(str);

//Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

function fibonacciSequence(n){
    var result;
    var num1=1;
    var num2=1;
    var sum=0;
    console.log("The fibonacci sequence of"+" "+n+" "+"numbers is:");
    for(var i=1;i<=n;i++){
        console.log(num1);
        sum+=num1;
        result=num1+num2;
        num1=num2;
        num2=result;
        
        
    }
    return sum;
}


var result=fibonacciSequence(8);
console.log("The sum of that fibonacci sequence is:"+" "+result);
