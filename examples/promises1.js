function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ url, data: `Data from ${url}` });
      }, Math.random() * 1000);
    });
}

let urls = ['https://api1.com', 'https://api2.com', 'https://api3.com'];

fetchAllByPromise(urls)
  .then((results) => {
    console.log('All data fetched successfully:');
    results.forEach(result => console.log(result));
});


fetchAllByAsync(urls)
.then((results) => {
  console.log('All data fetched successfully:');
  results.forEach(result => console.log(result));
});


function fetchAllByPromise(urls) {
  // Необходимо написать код функции, используя промисы (без использования async/await)
}

async function fetchAllByAsync(urls) {
  // Необходимо написать код функции, используя async/await (без использования промисов)
}




