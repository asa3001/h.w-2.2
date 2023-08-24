for (let i = 1; i <= 7; i++) {
    console.log('*'.repeat(i));
  }




  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }




  }
  function createChessboard(size) {
    let chessboard = '';
  
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
          chessboard += ' ';
        } else {
          chessboard += '#';
        }
      }
      chessboard += '\n';
    }
  
    return chessboard;
  }
  
  const chessboardSize = 8;
  const chessboard = createChessboard(chessboardSize);
  console.log(chessboard);


  // доп задание 1 



  const array = ['Алекс', 'Анна', 'Олег'];
array.push(1, 2, 3);

console.log(array);


function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    
    return result;
  }
  


// Доп 2 задание

function factorial(n){
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log( factorial(7) )