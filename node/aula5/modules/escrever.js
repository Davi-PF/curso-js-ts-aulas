const fs = require("fs").promises;

// const caminhoArquivo = path.resolve(__dirname, "..", "teste.txt");
module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, {
    flag: "w",
    encoding: "utf-8",
  });
};

/*
flag: w -> Apaga tudo que tem no arquivo e reescreve o que você quer que seja escrito, e.g.: Frase 1
flag: a -> 'Append' no final do arquivo, no caso adiciona uma nova frase no final da ultima adicionada.
*/
