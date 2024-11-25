// client code
const { IP, PORT } = require('./constants');
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    
    conn.write("Name: AMZ");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data); 
  });

  return conn;
};

module.exports = { connect };
