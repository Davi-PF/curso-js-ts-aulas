import GeraCpf from './modules/GeraCpf';
import './assets/css/style.css';

// IIF - Immediately Invoked Function
(function(){
    const gera = new GeraCpf();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();