// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.querySelector("#missionTarget");
    missionTarget.innerHTML = 
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src=${image}>
                 `
}
// addDestinationInfo() does not need to return anything!!

function validateInput(testInput) {
    if (testInput === "" || testInput === null) {
        return 'Empty'
    } else if (isNaN(testInput)) {
        return 'Not a Number'
    } else if (!isNaN(Number(testInput))) {
        return 'Is a Number'
    } else {
        return 'Idk what is going on.'
    }
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
    let pilotStatus = document.querySelector("#pilotStatus");
    let copilotStatus = document.querySelector("#copilotStatus");
    let fuelStatus = document.querySelector("#fuelStatus");
    let cargoStatus = document.querySelector("#cargoStatus");
    let faultyItems = document.querySelector("#faultyItems");
    let launchStatus = document.querySelector("#launchStatus");
    // let cargoStatus = document.querySelector("#cargoStatus");
    
    //if fields are empty
    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoMass) === 'Empty'){
        window.alert("All fields are required."); 
        preventDefault();
     }
     //if names are not text
     else if (validateInput(pilot) !== 'Not a Number'){
        window.alert("Enter valid Pilot name.");
        preventDefault();
     } 
     else if (validateInput(copilot) !== 'Not a Number'){
        window.alert("Enter valid Co-pilot name.");
        preventDefault();
     }
     //if fuel and mass are not numbers
     else if (validateInput(fuelLevel) !== 'Is a Number'){
        window.alert("Enter valid Fuel Level number.");
        preventDefault();
     }
     else if (validateInput(cargoMass) !== 'Is a Number'){
        window.alert("Enter valid Cargo Mass number.");
        preventDefault();
     }
     else {
        //update a list of what is currently ready or not ready for the shuttle launch. 
        //Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML += `: ${pilot} is ready for launch`;
        copilotStatus.innerHTML += `: ${copilot} is ready for launch`;
     }

     if (Number(fuelLevel) < 10000){
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = `There is not enough fuel for the journey`;
     }

     if (Number(cargoMass) > 10000){
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = `There is too much mass for the shuttle to take off`;
     }

    if(Number(fuelLevel) < 10000 || Number(cargoMass) > 10000){
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = "red";
    }
     else {
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.color = "green";
     }
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });
    
    return planetsReturned;
}

function pickPlanet(planets) {
    let random = Math.floor(Math.random()*planets.length);
    return planets[random]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
