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

  
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  }

  
  if (key === '1') {
    connection.write("Say: Let's GO!");
  } else if (key === '2') {
    connection.write("Say: Yum Yum Yum!");
  } else if (key === '3') {
    connection.write("Say: Watch Out!");
  }

  
  if (!['w', 'a', 's', 'd', '1', '2', '3', '\u0003'].includes(key)) {
    console.log(`Invalid key pressed: ${key}`);
  }
};

module.exports = {
  setupInput,
};
