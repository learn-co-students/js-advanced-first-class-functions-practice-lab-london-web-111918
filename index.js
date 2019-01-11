function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  });
};

//Receives an array of driver objects as
//the first argument and a location as the second argument.
//The function logs to the console the name attribute of each
//driver whose hometown matches the string passed in as the 'location' argument.
function logDriversByHometown(drivers, location) {
  const selec = drivers.filter(d => d.hometown === location)
  selec.forEach(d => console.log(d.name))
}

//Receives an array of driver objects and returns a
//new array of driver objects sorted by their revenue attribute from lowest to highest.


const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

//Receives an array of driver objects and returns a
//new array of driver objects sorted by their name attribute from A to Z.
//Here, you may have to use the String.prototype.localeCompare() method.

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

function totalRevenue(drivers) {
  let counter = 0
  drivers.forEach (d => counter = counter + d.revenue);
  return counter;
}

function averageRevenue(drivers) {
  const total = totalRevenue(drivers);
  return total / drivers.length
}
