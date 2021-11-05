function mapToNegativize(array){
  let new_array = []
  for (let item of array) {
    new_array.push(item * -1)
  }
  return new_array
}

function mapToNoChange(array){
  return array
}

function mapToDouble(array){
  let new_array = []
  for (let item of array){
    new_array.push(item * 2)
  }
  return new_array
}

function mapToSquare(array){
  let new_array = []
  for (let item of array) {
    new_array.push(item * item)
  }
  return new_array
}

function reduceToTotal(array,startingPoint = 0){
  let total = startingPoint
  for (let i of array){
    total += i
  }
  return total
}

function reduceToAllTrue(array){
  let val = true
  for (let i of array){
    if (!i) { val = false}
  }
  return val
}

function reduceToAnyTrue(array){
  let val = false
  for (let i of array) {
    if (i) {val = true}
  }
  return val
}