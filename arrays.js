function addElementToBeginningOfArray(car, door) {
  var carNew = [...car, door]
  return arrayNew
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var arrayNew = [element,  ...array]
  return arrayNew
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return console.log(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var arrayNew = array
  arrayNew.slice(-1)
  return arrayNew
}