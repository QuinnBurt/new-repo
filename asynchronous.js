// Define an async function named fetchData
async function fetchData() {
    try {
    // Use the fetch method to send a GET request to the specified URL and wait for the response
      const response = fetch('https://cf6ff4cf-56be-4bf2-9991-769db9eaa9f3.serverhub.tripleten-services.com/api/v1/warehouses');
      // Use the json method on the response object to extract the data from the response body and wait for it to be parsed
      const data = response.json();    
      console.log(data);
    }

    catch (error){
        console.log(error);
    }
  }
  
  // Call the fetchData function to execute it
  fetchData();