// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo, myFetch, formSubmission } = require("./scriptHelper");

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
       let image = missionPlanet.image;
       let moons = missionPlanet.moons;

       addDestinationInfo(document, name, diameter, star, distance, image, moons);
   })
   let form = document.querySelector("form");
   let faultyList = document.getElementById("faultyItems");
   faultyList.style.visibility = "hidden";
   form.addEventListener("submit", function(event){
    event.preventDefault();
    let pilotName = document.querySelector("input[name=pilotName").value;
    let copilotName = document.querySelector("input[name=copilotName").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel").value;
    let cargoLevel = document.querySelector("input[name=cargoMass").value;
    let list = document.getElementById("faultyItems");

    formSubmission(document, pilotName, copilotName, fuelLevel, cargoLevel, list);
   })
   
});

addDestinationInfo(listenPlanets[3])