// client code
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "172.25.186.223", 
    port: 50541,
  }); 

    conn.on("connect", () => {
      console.log("Successfully connected to game server");
      conn.write("Name: AMZ");

      conn.write("Move: up");
      conn.write("Move: up");
      conn.write("Move: up");
      conn.write("Move: up");

setTimeout(() => conn.write("Move: up"), 0);  
setTimeout(() => conn.write("Move: up"), 50); 
setTimeout(() => conn.write("Move: up"), 100);

const moveUpInterval = setInterval(() => conn.write("Move: up"), 50);

  });

  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };
