import jwt from 'jsonwebtoken'
import { where } from 'sequelize'
import User from '../models/Users'

export default async (req, res, next) => {

    const { authorization } = req.headers
    if (!authorization) return res.status(401).json({ erros: ['Login Required'] })

    const [, token] = authorization.split(' ')

    try {
        const { id, email } = jwt.verify(token, process.env.TOKEN_SECRET)
        
        const user = await User.findOne({ where: { id, email } })
        if(!user) return res.status(401).json({erros: ['Token invalid or expired']})

        req.userId = id
        req.userEmail = email 
        return next()

    } catch (e) {
        return res.status(401).json({ erros: ['Token invalid or expired'] })
    }
}
