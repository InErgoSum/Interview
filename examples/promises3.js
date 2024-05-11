function test() {
  return Promise.reject(1);
}

test().catch((err) => console.log(err));
