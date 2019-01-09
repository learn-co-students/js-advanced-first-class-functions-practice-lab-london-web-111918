// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach((driver) => {console.log(driver.name)})
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown == hometown){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  const revenueDrivers = drivers.slice()
  revenueDrivers.sort((a, b) => {return a.revenue - b.revenue})
  return revenueDrivers
}

function driversByName(drivers) {
  const nameDrivers = drivers.slice()
  nameDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
  return nameDrivers
}

function totalRevenue(drivers) {
  const revenueArray = []
  drivers.forEach((driver) => {revenueArray.push(driver.revenue)})
  return revenueArray.reduce((a, b) => a + b)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
