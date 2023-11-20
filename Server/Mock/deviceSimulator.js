exports.getDeviceData = () => {
    // Simulate device data
    try{
        console.log('start getDeviceData')
        const data = {
            timestamp: new Date(),
            value: Math.random(),  // Random value for demonstration
            alert: Math.random() < 0.1  // 10% chance of an alert
        };
        console.log('done getDeviceData')
        return data
    }
    catch(err){
        console.log(err)
        return null
    }
};