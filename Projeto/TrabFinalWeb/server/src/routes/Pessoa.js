import { Router } from "express";
import { GetAllPessoaController } from "../controller/Pessoa/GetAllPessoaController.js";
import { GetByIdPessoaController } from "../controller/Pessoa/GetByIdPessoaController.js";
import { CreatePessoaController } from "../controller/Pessoa/CreatePessoaController.js";
import { UpdatePessoaController } from "../controller/Pessoa/UpdatePessoaController.js";
import { DeletePessoaController } from "../controller/Pessoa/DeletePessoaController.js";

const PessoaRouter = Router();

// Get All
const getAllUsuarioController = new GetAllPessoaController();
PessoaRouter.get('/pessoa', getAllUsuarioController.handle);

// Get By ID
const getByIdUsuarioController = new GetByIdPessoaController;
PessoaRouter.get('/pessoa/:id', getByIdUsuarioController.handle);

// Create
const createUsuarioController = new CreatePessoaController();
PessoaRouter.post('/pessoa', createUsuarioController.handle);

// Update
const updateUsuarioController = new UpdatePessoaController();
PessoaRouter.put('/pessoa', updateUsuarioController.handle);

// Delete
const deleteUsuarioController = new DeletePessoaController();
PessoaRouter.delete('/pessoa', deleteUsuarioController.handle);

export { PessoaRouter };
