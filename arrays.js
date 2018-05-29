function addElementToBeginningOfArray(array, element) {
  arrayNew = [...array, element]
  return arrayNew
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}