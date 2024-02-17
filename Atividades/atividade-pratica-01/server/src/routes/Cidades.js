import { Router } from 'express';
import { CreateCidadeController } from '../controller/cidades/CreateCidadesController.js';
import { GetAllCidadeController } from '../controller/cidades/GetAllCidadesController.js';
import { GetByIdCidadeController } from '../controller/cidades/GetByIdCidadesController.js';
import { UpdateCidadeController } from '../controller/cidades/UpdateCidadesController.js';
import { DeleteCidadeController } from '../controller/cidades/DeleteCidadesController.js';

const cidadeRouter = Router();

// Create
const createCidadeController = new CreateCidadeController();
cidadeRouter.post('/cidades', createCidadeController.handle);

// Get All
const getAllCidadeController = new GetAllCidadeController();
cidadeRouter.get('/cidades', getAllCidadeController.handle);

// Get By Id
const getByIdCidadeController = new GetByIdCidadeController();
cidadeRouter.get('/cidades/:id', getByIdCidadeController.handle);

// Update
const updateCidadeController = new UpdateCidadeController();
cidadeRouter.put('/cidades', updateCidadeController.handle);

// Delete
const deleteCidadeController = new DeleteCidadeController();
cidadeRouter.delete('/cidades', deleteCidadeController.handle);

export { cidadeRouter }