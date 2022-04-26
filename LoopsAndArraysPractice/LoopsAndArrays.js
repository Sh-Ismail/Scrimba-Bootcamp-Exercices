//Loop through the following array and count how many "computers" there are.

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var counter=0;
for (var i=0; i<officeItems.length; i++){
    if(officeItems[i]==="computer"){
        counter++;
    }
}
console.log(counter);

//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for (var i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
     // log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18

    /*if(peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18){
          console.log("Old enough!");
      }
      else{
          console.log("not old enough!");
      }


     // Log to the console a personalized message like:

    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+" "+ "is OLD ENOUGH to see Mad Max!");
    }
    else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+" "+ "is NOT OLD ENOUGH to see Mad Max!");
    }
*/
    //Check to see if the movie goer is a male or female for an even more personalized message.


    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender==="male"){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18)
    {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is old enough. HE's good to see the movie.");
    }
    else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is not old enough. Don't let HIM in.");
    }
    }   
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender==="female"){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is old enough. SHE's good to see the movie.");
    }
    else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is not old enough. Don't let HER in.");
    }
    }
  }

  var lighttoggle = [2,3,435,1,7];
  var sum=0;
  for(var i=0;i<lighttoggle.length; i++){
      sum+=lighttoggle[i];
  }
  if(sum%2===0){
      console.log("The light is on!");
  }
  else{
      console.log("The light is off!");
  }
  