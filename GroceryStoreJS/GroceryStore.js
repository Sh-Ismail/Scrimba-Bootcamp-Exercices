var shopper = {
    firstName: "Shakir",
    lastName: "Ismail",
    age: 27,
    ofAge: true,
    groceryCart: ["bread","water","milk","eggs","tomatoes"],
    fullName: function(){
        return shopper.firstName + " " + shopper.lastName;
    }
};
console.log(shopper.fullName())