const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location) {
  const arr = drivers.filter(function(driver) {
    return driver.hometown == location;
  });
  return arr.forEach(function(driver) {
    console.log(driver.name);
  });
};

const driversByRevenue = function(drivers, revenue) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
};

const driversByName = function(drivers) {
  return drivers.slice().sort(function(driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total=0, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
