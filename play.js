// play code
const { connect } = require('./client');

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "172.25.186.223", 
    port: 50541, 
  });

  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
