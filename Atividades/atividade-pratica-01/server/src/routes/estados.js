import { Router } from "express";
import { GetAllEstadosController } from "../controller/estados/GetAllEstadosController.js";     // Recuperar
import { GetByIdEstadosController } from "../controller/estados/GetByIdEstadosController.js";   // Recuperar
import { CreateEstadosController } from "../controller/estados/CreateEstadosController.js";     // Criar
import { UpdateEstadosController } from "../controller/estados/UpdateEstadosController.js";     // Atualizar
import { DeleteEstadosController } from "../controller/estados/DeleteEstadosController.js";     // Deletar

const estadoRouter = Router()

// Get All
const getAllEstadosController = new GetAllEstadosController()
estadoRouter.get('/estados', getAllEstadosController.handle)

// Get By ID
const getByIdEstadosController = new GetByIdEstadosController()
estadoRouter.get('/estados/:id', getByIdEstadosController.handle)

// Create
const createEstadosController = new CreateEstadosController()
// O nome aqui não importa. O negocio é não ter o mesmo nome e o mesmo metodo
estadoRouter.post('/estados', createEstadosController.handle)

// Update
const updateEstadosController = new UpdateEstadosController()
estadoRouter.put('/estados', updateEstadosController.handle)

// Delete
const deleteEstadosController = new DeleteEstadosController()
estadoRouter.delete('/estados', deleteEstadosController.handle)

// Export - Router
export { estadoRouter }