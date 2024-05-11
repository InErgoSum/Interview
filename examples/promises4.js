async function test() {
  Promise.reject(1);
}

test().catch((err) => console.log(err));
