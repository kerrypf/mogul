import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import clear from "rollup-plugin-clear";
import license from "rollup-plugin-license";
import eslint from "rollup-plugin-eslint";
import antdExternal from "./fix/fixAntd";

const path = require("path");

let pkg = require("../package.json"),
  external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...antdExternal
  ];

export default {
  input: "src/index.js",
  output: {
    file: "build/mogul.js",
    format: "cjs"
  },
  external,
  plugins: [
    clear({
      targets: ["./build"]
    }),
    json(),
    eslint({
      throwOnError: true,
      throwOnWarning: true
    }),
    resolve({
      jsnext: true,
      main: true,
      only: [/^\.{0,2}\//],
    }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs({
      include: "src/**",
      exclude: ["node_modules/**"],
      extensions: [".js"],
      ignoreGlobal: false
    }),
    license({
      banner: {
        file: path.join(__dirname,'../LICENSE'),
        encoding: 'utf-8',
      },
    }),
    filesize({
      showGzippedSize: true
    })
  ]
};
