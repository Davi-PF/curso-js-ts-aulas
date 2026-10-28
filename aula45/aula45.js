function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch (e){
    //tratar erro
} finally {
    console.log("Tenha um bom dia!");
}

// try {
//     // executada quando não há erros
//     console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei um arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch(e){
//     // executada quando da erros
//     console.log('tratando o erro')
// } finally {
//     // executado sempre - pode ser omitido
//     console.log("FINALLY: Eu sempre sou executado.");
// }
