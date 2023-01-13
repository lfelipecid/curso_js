import { Router } from "express";
import alunoController from '../controllers/AlunoController'
import loginRequired from '../middlewares/tokenMiddleware'

const router = new Router()
// Routes
router.get('/', alunoController.index)
router.get('/:id', alunoController.show)
router.post('/', loginRequired, alunoController.create)
router.put('/:id', loginRequired, alunoController.updated)
router.delete('/:id', loginRequired, alunoController.delete)

export default router
