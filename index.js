// Code your solution in this file!
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

function logDriverNames(drivers) {
    drivers.forEach(driver => {
      console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){
    drivers.forEach(driver => {if (driver.hometown === location){
      console.log(driver.name)}
    })
}

logDriversByHometown(drivers, 'Pittsburgh')

function driversByRevenue(drivers){
  newArray = drivers.slice() // just slices the whole array of objects
    newArray.sort((rev1, rev2) => {return rev1.revenue - rev2.revenue
      })
    debugger
    return newArray
  }

driversByRevenue(drivers)

function driversByName(drivers){
  newArray = drivers.slice()
  newArray.sort((a, b) => {return a.name.localeCompare(b.name)
  })
return newArray
}

driversByName(drivers)

function totalRevenue(drivers){
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let allRev = drivers.map(driver => {
    return driver.revenue
  })
  return allRev.reduce(reducer)
}

totalRevenue(drivers)

function totalRevenue(drivers){
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let allRev = drivers.map(driver => {
    return driver.revenue
  })
  return allRev.reduce(reducer)
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
averageRevenue(drivers)
