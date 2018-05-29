function addElementToBeginningOfArray(array, element) {
  array.push(element)
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}