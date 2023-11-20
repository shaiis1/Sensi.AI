const deviceController = require('../controllers/devicesController');

module.exports = (socket) => {
  socket.on('requestData', async () => await deviceController.sendData(socket));
  // Additional event listeners can be added here
};