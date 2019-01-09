// Code your solution in this file!
const callback = function(el, i, arr) {
 console.log(el['name']);
};

const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver['name'])
  });
};

const logDriversByHometown = function(drivers, arg) {
  drivers.forEach(function(driver) {
    if (arg === driver['hometown']) {
      console.log(driver['name'])
    }
  });
};

const driversByRevenue = function(drivers) {
  let copyDriver = [...drivers]
    return copyDriver.sort(
    function(driver1, driver2){
    return driver1['revenue'] - driver2['revenue']
  });
}

const driversByName = function(drivers) {
  return drivers.slice("").sort(
    function(driver1, driver2){
      return driver1['name'].localeCompare(driver2['name']);
    }
  );
};

const totalRevenue = function(drivers){
  return drivers.reduce(
    function(sum, driver) {return sum + driver['revenue']}, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
};
