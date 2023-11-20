const deviceSimulator = require('../Mock/deviceSimulator');

exports.sendData = async (socket) => {
  try{
    setInterval(async () => {
      console.log('start sendData')
      const data = await deviceSimulator.getDeviceData();
      console.log(`start sendData. data: ${JSON.stringify(data)}`)
      socket.emit('deviceData', data); 
    }, 10000);
  }
  catch(err){
    console.log(err)
    return null
  }
};
