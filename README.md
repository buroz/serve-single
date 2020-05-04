### Single Page Application Server Tool

serve-spa requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and build with this command.

```sh
node fuse.js
```

Then start the server

```sh
node dist/serve-single.js --port 8080 --path ./public
```

```sh
Usage: serve-single.js --<command> <value>

Options:
  --version     Show version number                                    [boolean]
  --port, --po  HTTP PORT                                    [number]  [required]
  --path, --pa  PUBLIC PATH                                  [string]  [required]
  --help        Show help                                              [boolean]

Missing required arguments: port, path
Please provide both port and path arguments to work with this tool
```
