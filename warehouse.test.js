async function getWarehouseResponse(){
    try{
        const response = await fetch('https://cf6ff4cf-56be-4bf2-9991-769db9eaa9f3.serverhub.tripleten-services.com/api/v1/warehouses');
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        return;
    }
}

test('status should be 200', async () => {
    let actualStatus;
    try {
        // Make request
        const response = await fetch('https://cf6ff4cf-56be-4bf2-9991-769db9eaa9f3.serverhub.tripleten-services.com/api/v1/warehouses');
        // Extract response code status
        console.log(response);
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    // Check code status
    expect(actualStatus).toBe(200);
});

test('number of warehouses should be greater than 0', async () => {
    /*let response;
    try {
        response = await fetch('https://cf6ff4cf-56be-4bf2-9991-769db9eaa9f3.serverhub.tripleten-services.com/api/v1/warehouses');
    } catch (error) {
        console.error(error);
    }*/
    // Convert response to JavaScript object
    const data = await getWarehouseResponse();
    const countStores = data.length;
    expect(countStores).toBeGreaterThan(0);
});

test('the opening hour is earlier than the closing hour', async () => {
    let response;
    /*try {
        response = await fetch('https://cf6ff4cf-56be-4bf2-9991-769db9eaa9f3.serverhub.tripleten-services.com/api/v1/warehouses');
    } catch (error) {
        console.error(error);
    }*/
    const data = await getWarehouseResponse();
    let result = [];
    for (const warehouse in data){
        // Extract the opening hours for the warehouse
        const startWorkingHours = data[warehouse]["workingHours"]["start"];
        // Extract the closing hours for the warehouse
        const endWorkingHours = data[warehouse]["workingHours"]["end"];
        result.push(endWorkingHours > startWorkingHours);
    }
    expect(result).not.toContain(false);
});