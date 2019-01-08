// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
};

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver){
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

function driversByRevenue(drivers) {
  const driversCopy = [...drivers]
    driversCopy.sort(function(a, b) {
      return a.revenue - b.revenue
    });
  return driversCopy;
};

function driversByName(drivers) {
  const driversCopy = [...drivers]
    driversCopy.sort(function(a, b) {
       return a.name.localeCompare(b.name);
    });
  return driversCopy;
};

// function totalRevenue(drivers) {
//   return drivers.reduce(function(agg, driver) {
//     return agg + driver.revenue;
//   }, 0);
// };

// Last function refactored for comparison
function totalRevenue(drivers) {
  return drivers.reduce( (agg, ele) => agg + ele.revenue, 0 );
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
