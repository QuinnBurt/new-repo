async function putRequest() {
    const requestBody = {
            "price": 175
        }
    try {
        const response = await fetch('https://cf6ff4cf-56be-4bf2-9991-769db9eaa9f3.serverhub.tripleten-services.com/api/v1/products/7', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

putRequest()