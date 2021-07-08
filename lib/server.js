
const app = require('../mock/index')

module.exports = (server/* , options */) => {
  server.on('request', app)
  
  // handle websocket request
  server.on('upgrade', (req, socket) => {
    // do something
    req.passThrough();
  });

  // handle tunnel request
  server.on('connect', (req, socket) => {
    // do something
    req.passThrough();
  });
};
