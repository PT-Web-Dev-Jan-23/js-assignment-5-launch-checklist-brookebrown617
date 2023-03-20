// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
};

function validateInput(testInput) {
   let numberInput = Number(testInput)
    if (testInput === "" || testInput === 0) {
    return "Empty"
   } else if (isNaN(numberInput)) {
    console.log("Not a Number")
    return "Not a Number"
   } else if (isNaN(numberInput) === false){
    console.log("Is a Number")
    return "Is a Number"
   }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Please enter correct information!");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `The Pilot ${pilot} is ready for liftoff!`;
        copilotStatus.innerHTML = `The Copilot ${copilot} is ready for liftoff!`;
        let launchStatus = document.getElementById("launchStatus");
    if(fuelLevel < 10000 && cargoLevel <= 10000){
        list.style.visibility = "visible"
        fuelStatus.innerHTML = "Not enough fuel for journey!"
        cargoStatus.innerHTML = "Cargo level is ready for launch!"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "red"   
    } else if (fuelLevel >= 10000 && cargoLevel > 10000){
        list.style.visibility = "visible"
        fuelStatus.innerHTML = "Fuel is ready for launch!" 
        cargoStatus.innerHTML = "Cargo Mass is too heavy for launch!";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch!";
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        list.style.visibility = "visible"
        fuelStatus.innerHTML = "Not enough fuel for journey!";
        cargoStatus.innerHTML = "Cargo Mass is too heavy for launch!";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch!";
    } else {
        fuelLevel.innerHTML = "Fuel is ready for launch!";
        cargoStatus.innerHTML = "Cargo level is ready for launch!"
        launchStatus.innerHTML = "Shuttle is ready for launch!";
        launchStatus.style.color = "green";
        }
    }
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    console.log(response)    
    return response.json();
        });
    console.log(planetsReturned)
    return planetsReturned;
}

function pickPlanet(planets) {
    let random = Math.floor(Math.random() * planets.length);
    return planets[random];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
