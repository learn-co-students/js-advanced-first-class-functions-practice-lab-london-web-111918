// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivers) {
  const newArray = drivers.slice().sort(function(a, b) {
      return a.revenue - b.revenue;
    })
  return newArray;
}

const driversByName = function(drivers) {
  //for (const driver in drivers) {
    const newArray = drivers.slice().sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
  return newArray;
}

const totalRevenue = function(drivers) {
  const newArray = drivers.reduce(function (accumulator, driver) {
    return accumulator + driver.revenue;
  }, 0);
  return newArray;
}

const averageRevenue = function(drivers) {
  const newArray = drivers.reduce(function (accumulator, driver) {
    return accumulator + driver.revenue;
  }, 0);
  return newArray/drivers.length;
}
