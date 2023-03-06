// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
   
  
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
    //    Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planetRandom = pickPlanet(listedPlanets)
    // {let destination = document.querySelector('destination');
    //  destination.addEventListener("", function(event))
    // let name = document.querySelector('li[Name]').value;
    // let diameter = document.querySelector('li[Diameter]').value;
    // let star = document.querySelector('li[Star]').value;
    // let distance = document.querySelector('li[Distance from Earth]').value;
    // let moons = document.querySelector('li[Number of Moons]').value;
    // let imageUrl = document.querySelector('img src').value;
    addDestinationInfo(document, planetRandom.name, planetRandom.diameter, planetRandom.star, planetRandom.distance, planetRandom.moons, planetRandom.image);
})


   let form = document.querySelector('form')
   form.addEventListener('submit', function(event){
    event.preventDefault();
    let pilot = document.getElementById('pilotName').value;
    let copilot = document.querySelector('input[name=copilotName]').value;
    let fuelLevel = document.querySelector('input[name=fuelLevel').value;
    let cargoLevel = document.querySelector('input[name=cargoMass]').value;
    let list = document.getElementById("faultyItems");
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
   })
})
