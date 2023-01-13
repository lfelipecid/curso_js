import { Router } from "express";
import photoController from '../controllers/photoController'
import loginRequired from '../middlewares/tokenMiddleware'

const router = new Router()

//Routes
router.post('/', loginRequired, photoController.create)

export default router