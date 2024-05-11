function outer() {
    let count = 0;
    
    return function inner() {
      console.log(count);
      count++;
    };
}

let foo = outer();
foo();
foo();
  