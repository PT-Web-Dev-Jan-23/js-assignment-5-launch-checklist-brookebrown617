// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerhtml = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="">`
};

function validateInput(testInput) {
   let numberInput = Number(testInput)
    if (testInput === "") {
    return "Empty"
   } else if (numberInput === String) {
    return "Not a Number"
   } else if (numberInput === Number){
    return "Is a Number"
   }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementByID("pilotStatus");
    const copilotStatus = document.getElementByID("copilotStatus");
    const fuelStatus = document.getElementByID("fuelStatus");
    const cargoStatus = document.getElementByID("cargoStatus");

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!")
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Please enter correct information!")
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerhtml = `The Pilot ${pilot} is ready for liftoff!`;
        copilotStatus.innerhtml = `The Copilot ${copilot} is ready for liftoff!`;
        let launchStatus = document.getElementByID("launchStatus");
    if((fuelLevel) < 10000 && cargoLevel <= 10000){
        faultyList.style.visibility = "visible"
        fuelStatus.innerhtml = "Not enough fuel for journey!"
        cargoStatus.innerhtml = "Cargo level is ready for launch!"
        launchStatus.innerhtml = "Shuttle not ready for launch"
        launchStatus.style.color = "red"   
    } else if ((fuelLevel) >= 10000 && (cargoLevel) > 10000){
        faultyList.style.visibility = "visible"
        fuelStatus.innerhtml = "Fuel is ready for launch!" 
        cargoStatus.innerhtml = "Cargo Mass is too heavy for launch!";
        launchStatus.style.color = "red";
        launchStatus.innerhtml = "Shuttle not ready for launch!";
    } else if ((fuelLevel) < 10000 && (cargoLevel) > 10000) {
        faultyList.style.visibility = "visible"
        fuelStatus.innerhtml = "Not enough fuel for journey!";
        cargoStatus.innerhtml = "Cargo Mass is too heavy for launch!";
        launchStatus.style.color = "red";
        launchStatus.innerhtml = "Shuttle not ready for launch!";
    } else {
        fuelLevel.innerhtml = "Fuel is ready for launch!";
        cargoStatus.innerhtml = "Cargo level is ready for launch!"
        launchStatus.innerhtml = "Shuttle is ready for launch!";
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
