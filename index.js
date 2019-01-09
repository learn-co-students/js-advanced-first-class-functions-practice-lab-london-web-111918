// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function(drivers){
  return drivers.slice(" ").sort(function (a,b){
    return a.revenue - b.revenue;
  })
}

const driversByName = function(drivers){
  return drivers.slice(" ").sort(function (a, b){
    return (a.name).localeCompare(b.name);
  });
}

function totalRevenue(drivers){
  return drivers.reduce((agg, el) => agg + el.revenue, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length;
}
