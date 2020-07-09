// Add your functions here

function map(src, cb) {
    let array = []
  
    for (let i = 0; i < src.length; i++) {
      let theElement = src[i]
      array.push(cb(theElement))
    }
  
    return array;
  }
  
  function reduce(src, cb, starting){
    let array = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      array = cb(src[i], array)
    }
  
    return array;
  }