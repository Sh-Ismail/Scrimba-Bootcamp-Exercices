//creating new object "places"

var places = {
    name: "Niagara Falls",
    country: "Ontario",
    area: "209.7 square km",
    nicknames: ["Honey Moon Capital of the World","The Falls"],
    spokenLanguages: ["English", "Italian", "Scotish","Irish","French"],
    weather: {
        currentTemperature: 16,
        currentWind: "2km/h",
        currentHumidity: "81%",
        weatherForecast: {
            monday: {
                temperature: 16,
                wind: "2km/h",
                humidity: "81%" 
            },
            tuesday: {
                temperature: 16,
                wind: "2km/h",
                humidity: "81%"
            },
            wednesday: {
                temperature: 16,
                wind: "2km/h",
                humidity: "81%"
            },
            thursday: {
                temperature: 16,
                wind: "2km/h",
                humidity: "81%"
            },
            friday: {
                temperature: 16,
                wind: "2km/h",
                humidity: "81%"
            }
        }
    },
    upcomingEvents:{
        name: "The Summer Falls",
        date: "15.06.2022",
        numberOfDays: 3,
        getName: function(){
            return this.name;
        },
        setName: function(nameToAdd){
            this.name=nameToAdd;
        } 
    }
}
//Adding 2 properties to one of the objects
places.residents=45000;
places.upcomingEvents.participants=16500;

//Adding 2 items to the arrays 
places.nicknames[2]="The Great Falls";
places.spokenLanguages[5]="Spanish";
//Set new event name
var newEvent="The Great Fall";
places.upcomingEvents.setName(newEvent);
console.log(places.upcomingEvents.getName());
console.log(places);
