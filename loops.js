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