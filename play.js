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

const setupInput = function () {
  const stdin = process.stdin;  
  stdin.setRawMode(true);       
  stdin.setEncoding("utf8");    
  stdin.resume(); 
  stdin.on("data", handleUserInput);              
  return stdin;                 
};

const handleUserInput = function (key) {

  if (key === '\u0003') {  
    process.exit();        
  }
};



console.log("Connecting ...");
connect();

setupInput();