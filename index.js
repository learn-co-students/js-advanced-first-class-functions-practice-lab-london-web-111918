// Code your solution in this file!
function logDriverNames(collection) {
  collection.forEach((driver) => console.log(driver.name))
}

function logDriversByHometown(collection, town) {
  collection.forEach(function(driver) {
    if (driver.hometown === town) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(collection) {
  const newArr = collection.slice().sort((d1, d2) => { return d1.revenue - d2.revenue})
  return newArr
}

function driversByName(collection) {
  const newArr = collection.slice()
    .sort(function(d1, d2) {
      if (d1.name > d2.name) {
        return 1
      } else if (d1.name < d2.name) {
        return -1
      } else {
        return 0
      }
    })
  return newArr
}

function totalRevenue(collection) {
  let initial = 0
  return collection.reduce(
    (acc, driver) => acc + driver.revenue, initial
  )
}

function averageRevenue(collection) {
  let initial = 0
  let total = collection.reduce(
    (acc, driver) => acc + driver.revenue, initial
  )
  return total / collection.length
}
