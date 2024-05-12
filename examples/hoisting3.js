foo();
// ?

function foo() {
  bar();
  loo();

  function bar() {
    console.log('bar');
  }

  const loo = () => {
    console.log('loo');
  }

  console.log('foo');
}
