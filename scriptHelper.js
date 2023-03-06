// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
     let numInput = Number(testInput);
    if (testInput === '') {
        return "Empty";
    } else if (isNaN(numInput)) {
        return "Not a Number";
    } else if (!isNaN(numInput)) {
        return "Is a Number";
    }


}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     let pilotStatus = document.getElementById("pilotStatus");
     let copilotStatus = document.getElementById("copilotStatus");
     let fuelStatus = document.getElementById("fuelStatus");
     let cargoStatus = document.getElementById("cargoStatus");
     let launchStatus = document.getElementById("launchStatus");



    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        window.alert("All fields are required!")

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Make sure to enter valid information for each field!");
    } else {
        list.style.visibility = 'visible';
        pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;


        if(fuelLevel < 10000 && cargoLevel <= 10000){
            fuelStatus.innerHTML ="Fuel level too low for launch";
            cargoStatus.innerHTML ="Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E";        

        } else if(fuelLevel>=10000 && cargoLevel>10000){
            fuelStatus.innerHTML ="Fuel level high enough for launch";
            cargoStatus.innerHTML ="Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E"; 

        } else if(fuelLevel>= 10000 && cargoLevel <= 10000){
            fuelStatus.innerHTML ="Fuel level high enough for launch";
            cargoStatus.innerHTML ="Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)"; 
        }
    }

}

async function myFetch = fetch("https://handlers.education.launchcode.org/static/planets.json");
myFetch.then(function(response) {
    let planetsReturned = Math.floor(Math.random()*arr.length));
    const jsonPromise.then(function(json){
        planetsReturned = await fetch().then(function (response)
    ))
    
    });

    return planetsReturned;
}

// const fetchPromise = fetch("https://handlers.education.launchcode.org/static/weather.json");
// fetchPromise.then( function(response) {
//    const jsonPromise = response.json();
//    jsonPromise.then( function(json) {
//       console.log("temp", json.temp);
//    });
// } );

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
