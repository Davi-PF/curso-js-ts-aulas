// function formatMonthToText(month) {
//   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//   return meses[month];
// }

// function formatDayToText(diaSemana) {
//   const diasSemana = ['domingo', 'segunda-feira', 'terça-feira' ,'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
//   return diasSemana[diaSemana];
// }

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`;
// }


// function formatDateTime(data){

//     let day = data.getDate();
//     let month = formatMonthToText(data.getMonth());
//     let year = data.getFullYear();
//     let hour = zeroAEsquerda(data.getHours());
//     let minutes = zeroAEsquerda(data.getMinutes());
//     let indexDay = formatDayToText(data.getDay());
    
//     return `${indexDay}, ${day} de ${month} de ${year} ${hour}:${minutes}`;

// }

// function insertData() {
//     const containerDateTime = document.querySelector('.container-dateTime');

//     containerDateTime.innerHTML = `${formatDateTime(new Date)}`;
// }

// insertData();

const containerDateTime = document.querySelector('.container-dateTime');
const data = new Date();
containerDateTime.innerHTML = `${data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})}`;