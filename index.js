// Code your solution in this file!
const logDriverNames = drivers => {
  drivers.forEach(driver => console.log(driver.name));
}

const logDriversByHometown = (drivers, location) => {
  drivers.forEach(driver => { if(driver.hometown === location) {
    console.log(driver.name);
    }
  });
}

const driversByRevenue = drivers => {
  return drivers.slice().sort((a, b) => a.revenue - b.revenue);
}

/*
// This works and so does the one below
const driversByName = drivers => {
  return drivers.slice().sort((a, b) => a.name.localeCompare(b.name));
}
*/

const driversByName = drivers => {
  return drivers.slice().sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) { return -1; }
    if (nameA > nameB) { return 1;  }
    return 0;
    });
}

const totalRevenue = drivers => {
  return drivers.slice().reduce((a, b) => a + b.revenue, 0);
}

const averageRevenue = drivers => {
  return totalRevenue(drivers) / drivers.length;
}
