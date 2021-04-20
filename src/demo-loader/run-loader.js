const fs = require("fs");
const path = require("path");
const { runLoaders } = require("loader-runner");

runLoaders(
  {
    resource: path.resolve(__dirname, "./demo.txt"),
    loaders: [
      {
        loader: path.resolve(__dirname, "./loaders/demo-loader"),
        options: {
          name: "demo.[ext]",
        },
      },
    ],
    readResource: fs.readFile.bind(fs),
    context: { emitFile: () => {} },
  },
  (err, result) => (err ? console.error(err) : console.log(result))
);
