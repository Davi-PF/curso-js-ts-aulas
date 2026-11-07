const fs = require("fs").promises;
const path = require("path");

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue; // ignora pasta .git
    if (/node_modules/g.test(fileFullPath)) continue; // Não lista coisas da node_modules

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    // movido pra baixo, para que continue a recursão
    if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath))
      continue; // Ignora arquivos que não forem CSS e HTML

    console.log(fileFullPath);
  }
}

readdir("D:/Projetos/Curso Javascript+Typescript/");

// fs.readdir(path.resolve(__dirname))
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e));
