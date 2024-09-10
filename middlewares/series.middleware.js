const {series} = require('../controllers/series.controller')
const middleware = {}

const validateIdSerie = (req, res, next) => {
    const id = req.params.id
    const serie = series.find(serie => serie.id == id)
    if (!serie)
        return res.status(404).json({mensaje:`El Id ${id} no existe.`})
    next()
}
middleware.validateIdSerie = validateIdSerie

module.exports = middleware