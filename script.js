// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    // window.alert("All fields are required.");
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    // FIXME: MAtt added this back in
    event.preventDefault();
    
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;
    
    formSubmission(document, pilot, copilot, fuelLevel, cargoMass);
      })

      let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
//    event.preventDefault();
});