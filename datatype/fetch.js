// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Data fetched successfully';
        if (data) {
          resolve(data);
        } else {
          reject('Failed to fetch data');
        }
      }, 5000);
    });
  }
  
  // Function that uses async and await
  async function getData() {
    try {
      // Use the await keyword to wait for the Promise to be resolved
      const result = await fetchData();
      console.log('Data:with Async', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Function that uses Promises directly
  function getDataWithPromise() {
    fetchData()
      .then((result) => {
        console.log('Data: with function that use direct promise', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  // Call the functions
  getData(); // Using async and await
  getDataWithPromise(); // Using Promises directly
  