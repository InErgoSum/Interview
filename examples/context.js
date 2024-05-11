let john = {
    name: 'John',
    greet: function() {
      console.log('Hello, my name is', this.name);
    },
    child: {
        name: 'Bob',
        surname: 'Green',
        greet: () => {
            console.log('Hello, my name is', this.name);
        },
        saySurname: function() {
            const sayFunc = () => {
                console.log('My surname is', this.surname);
            }

            sayFunc();
        }
    }
};
  

john.greet();
// ?

let greetFunc = john.greet;
greetFunc();
// ?

john.child.greet();
// ?

john.child.saySurname();
// ?
