function forLoop(array) {
  
  for (i = 1; i <= 25; i++) {
    array.push(`I am ${i} strange loop${i <= 1 ? '' : 's'}.`);
  }
  
}

function whileLoop(num) {
  
  while(num > 0) {
    console.log(num);
  }
  
  return 'done';
}

function doWhileLoop(array) {
  
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  
  do {
    array.pop();
  } while(array.length > 0 && maybeTrue() )
  
}