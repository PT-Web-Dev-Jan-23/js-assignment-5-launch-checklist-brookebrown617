// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo, myFetch, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   console.log(listedPlanetsResponse)
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let missionPlanet = pickPlanet(listedPlanets);
       let name = missionPlanet.name;
       let diameter = missionPlanet.diameter;
       let star = missionPlanet.star;
       let distance = missionPlanet.distance;
       let moons = missionPlanet.moons;
       let image = missionPlanet.image;

       addDestinationInfo(document, name, diameter, star, distance, moons, image);
   })
   let list = document.getElementById("faultyItems");
   let form = document.querySelector("form");
   list.style.visibility = "hidden";
   form.addEventListener("submit", function(event){
    event.preventDefault();
    let pilotName = document.querySelector("input[name=pilotName").value;
    let copilotName = document.querySelector("input[name=copilotName").value;
    let fuelLevels = document.querySelector("input[name=fuelLevel");
    let cargoLevels = document.querySelector("input[name=cargoMass");
    let fuelLevel = Number(fuelLevels.value);
    let cargoLevel = Number(cargoLevels.value);

    console.log(pilotName, copilotName, fuelLevel, cargoLevel)
   

    formSubmission(document, pilotName, copilotName, fuelLevel, cargoLevel, list);
   })
   
});

