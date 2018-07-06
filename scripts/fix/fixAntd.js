const path = require("path");
const fs = require("fs");

const antdExternals = [];

const rootDir = "antd/es";

const rootPath = path.resolve(process.cwd(), "node_modules");

function getExternalsInFold(fold) {
  let files = fs.readdirSync(path.resolve(rootPath, fold));

  files.filter(f => !(f.endsWith(".ts") || f.endsWith(".less"))).forEach(file => {
    let fullPath = fold + "/" + file;
    if (fs.lstatSync(path.resolve(rootPath, fullPath)).isDirectory()) {
      antdExternals.push(fullPath);
      getExternalsInFold(fullPath);
    } else if (file.endsWith(".js")) {
      antdExternals.push(fullPath.replace(".js",""));
    } else if (file.endsWith(".css")) {
      antdExternals.push(fullPath);
    }
  });
}

getExternalsInFold(rootDir);
export default antdExternals;
