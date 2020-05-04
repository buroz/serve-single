const { FuseBox } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "server@es6",
  output: "dist/$name.js",
  useTypescriptCompiler: true,
});

fuse.bundle("serve-single").instructions(" > index.js");

fuse.run();
