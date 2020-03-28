const { readFile, existsSync } = require("fs");
const { createServer } = require("http");
const { extname } = require("path");
const yargs = require("yargs");

const options = yargs
  .usage("Usage: serve-spa --<command> <value>")
  .option("port", { alias: "po", describe: "HTTP PORT", type: "number" })
  .option("path", { alias: "pa", describe: "PUBLIC PATH", type: "string" })
  .demandOption(["port", "path"], "Please provide both port and path arguments to work with this tool")
  .help().argv;

const PORT = options.port;
const PUBLIC = options.path;
const INDEX = options.path + "/index.html";

createServer((req, res) => {
  const ext = extname(req.url);
  const status = existsSync(PUBLIC + req.url);
  if (ext && status) {
    response(res, PUBLIC + req.url);
  } else {
    response(res, INDEX);
  }
}).listen(PORT);

function response(res, filePath) {
  readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
    }
    res.write(file);
    res.end();
  });
}
