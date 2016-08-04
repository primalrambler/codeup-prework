(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'];

    // function for logging the planets array
    function logPlanets(planets) {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var tempPlanet1 = planets.slice(0);
    tempPlanet1.unshift('Sun');
    logPlanets(tempPlanet1);

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var tempPlanet2 = tempPlanet1.slice(0);
    tempPlanet2.push('Pluto')
    logPlanets(tempPlanet2);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var tempPlanet3 = tempPlanet2.slice(0);
    tempPlanet3.shift();
    logPlanets(tempPlanet3);

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var tempPlanet4 = tempPlanet3.slice(0);
    tempPlanet4.pop();
    logPlanets(tempPlanet4);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log(planets.indexOf('Earth'));

    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var tempPlanet6 = planets.slice(0);
    tempPlanet6.splice(planets.indexOf('Earth')+1,1)
    logPlanets(tempPlanet6)

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var tempPlanet7 = tempPlanet6.slice(0);
    tempPlanet7.splice(planets.indexOf('Earth')+1,1,'Mars')
    logPlanets(tempPlanet7)


    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var tempPlanet8 = planets.slice(0);
    tempPlanet8.reverse();
    logPlanets(tempPlanet8);

    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var tempPlanet9 = planets.slice(0);
    tempPlanet9.sort();
    logPlanets(tempPlanet9);
})();
