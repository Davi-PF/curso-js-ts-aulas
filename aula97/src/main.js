import 'core-js/stable' // <-- para rodar me navegadores mais antigos, manter esse import
import 'regenerator-runtime/runtime' // <-- Isso resolveria o problema do regenerateRuntime em versões antigas do javascript
/* O código dessa maneira era para dar erro no regenerateRuntime, mas devido as atualizações (pelo que lembro o curso era de 2019;
    Não deu erro e executou normalmente o código abaixo. Para corrigir, naquele tempo, seria necessário fazer o que está acima ^^
*/
import executa from "./modules/promises";
import "./assets/css/style.css";
executa();
