import multer from "multer"
import multerConfig from "../config/multerConfig"
import Foto from '../models/Fotos'

const upload = multer(multerConfig).single('foto')

class PhotoController {
    create(req, res) {
        return upload(req, res, async (err) => {
            if (err) return res.status(400).json({ erros: [err.code] })
            try {
                const { originalname, filename } = req.file
                const { aluno_id } = req.body
                const foto = await Foto.create({ originalname, filename, aluno_id })
                return res.json(foto)
            } catch (e) {
                return res.status(400).json({erros: ['Error on upload.']})
            }   
        })
    }
}

export default new PhotoController()