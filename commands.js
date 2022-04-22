const { log } = require("console");
const fs = require("fs");

module.exports = {
  pwd,
  date,
  ls,
  echo,
  cat,
  head,
  tail,
  curl
};

function pwd() {
  let path = process.cwd();
  process.stdout.write(path);
  process.stdout.write("\nprompt > ");
}

function date() {
  let fecha = Date();
  process.stdout.write(fecha);
  process.stdout.write("\nprompt > ");
}

function ls() {
  const fs = require("fs");
  fs.readdir(".", function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("prompt > ");
  });
}

function echo(data) {

  process.stdout.write(data);
 
  process.stdout.write("\nprompt > ");
}

function cat(cmd) {
  

  fs.readFile(cmd, (err, data) => {
    process.stdout.write(data);
    process.stdout.write("\nprompt > ");
  });
}

function head(cmd) {
 

  fs.readFile(cmd, (err, data) => {
    if (err) throw err;
    let linea = data.toString().split("\n");

    linea = linea.slice(0, 5).join("\n");
    process.stdout.write(linea);
    process.stdout.write("\nprompt > ");
  });
}
function tail(cmd) {


  fs.readFile(cmd, (err, data) => {
    if (err) throw err;

    let linea = data.toString().split("\n");
    let ultimas = linea.splice(linea.length - 6, linea.length).join("\n");
    process.stdout.write(ultimas);

    process.stdout.write("\nprompt > ");
  });
}

function curl(url) {
  let request=require("request")
 

  request(url.toString(),(err, reponse, body)=>{
    
     process.stdout.write(body + "\n");

    process.stdout.write("\nprompt > ");
  })
  
}