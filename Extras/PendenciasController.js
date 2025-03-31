import Pendencias from '../models/Pendencias';

Rae.hasOne(Pendencias, {
    foreignKey: 'id_ciee15_s0',
})

Pendencias.belongsTo(Rae, {
    foreignKey: 'estagiario_id',
})

class PendenciasController {
    async show(req, res) {
        try {
            const pendencia = await Pendencias.findAll({
                attributes: ['empresa_id'],
            });
    
            const empresa_id = pendencia.map(item => item.empresa_id);
    
            return res.json({ empresa_id });
    
        } catch (e) {
            return res.status(500).json({ errors: ['Erro ao buscar dados.'] });
        }
    }

    async store(req, res) {
        try {
            const estagiario = await Pendencias.create({ cpf: req.body.cpf, rae: req.body.rae, empresa_id: req.body.empresa_id, estagiario_id: req.idCiee15
        });

            return res.json(estagiario);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    } 
} 

export default new PendenciasController();