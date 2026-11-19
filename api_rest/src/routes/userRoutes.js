import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveria existir
router.get("/", userController.index); // Listar todos os usuários
// router.get("/:id", userController.show); // Lista usuário

router.post("/", userController.store);
router.put("/", loginRequired, userController.update); // O usuário só pode atualizar o seu usuário
router.delete("/", loginRequired, userController.delete); // O usuário só pode deletar o seu usuário

export default router;

/*
index         ->  lista todos os usuários    -> GET
store/create  ->  cria um novo usuário       -> POST
delete        ->  apaga um usuário           -> DELETE
show          ->  mostra um usuário          -> GET
update        ->  atualiza um usuário        -> PATCH ou PUT
*/
