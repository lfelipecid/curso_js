import { Router } from 'express'
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/tokenMiddleware'

const router = new Router()

// Home
router.get('/', userController.index)
router.get('/:id', userController.show)

router.post('/', userController.create)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router


/*
Index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um user -> DELETE
show -> mostra um user -> GET
update -> atualiza um user -> PATCH ou PUT
*/