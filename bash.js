const commands = require("./commands");
process.stdout.write("prompt > ");

process.stdin.on("data", function (data) {
  let cmd = data.toString().trim().split(" ");
  let command=cmd[0]
  let promt= cmd.splice(1).join(" ");
 
      
 commands[command](promt)
  

  

  //process.stdout.write("You typed: " + cmd);
});
