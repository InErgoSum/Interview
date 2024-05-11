foo();


function foo() {
    bar();

    function bar() {
        console.log('bar');
    }

    console.log('foo');
}

