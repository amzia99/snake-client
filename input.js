// input code
let connection;

const setupInput = (conn) => {
  connection = conn;

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

// movement keys WASD
  if (key === 'w') {
    console.log("Move: up");
  } else if (key === 'a') {
    console.log("Move: left");
  } else if (key === 's') {
    console.log("Move: down");
  } else if (key === 'd') {
    console.log("Move: right");
  }

  if (key === '1') {
    connection.write("Say: Let's GO!");
} else if (key === '2') {
    connection.write("Say: Yum Yum Yum!");
} else if (key === '3') {
    connection.write("Say: Watch Out!");
}
};

module.exports = {
  setupInput
};
