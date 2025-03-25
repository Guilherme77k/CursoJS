import Rae from '../models/Rae';
import Empresa_teste from '../models/Empresa_teste';
import Estudante_teste from '../models/Estudante_teste';

Empresa_teste.hasOne(Rae, {
    foreignKey: 'empresa_id',
})

Rae.belongsTo(Empresa_teste, {
    foreignKey: 'empresa_id',
})

Estudante_teste.hasOne(Rae, {
    foreignKey: 'estudante_id',
})

Rae.belongsTo(Estudante_teste, {
    foreignKey: 'estudante_id',
})

class RaeController {
    async index(req, res) {
        const rae = await Rae.findAll();
        res.json(rae);
    }

    async store(req, res) {
        try {
            const estagiario = await Rae.create({ estudante_id: req.userId,  empresa_id: req.empresaId, nome_estagiario: req.body.nome_estagiario, cpf: req.body.cpf,
            sequencial: req.sequencial, id_ciee15_s0: req.idCiee15, instituicao_ensino: req.body.instituicao_ensino, nome_empresa: req.body.nome_empresa, 
            conhecimento_teorico: req.body.conhecimento_teorico, experiencia_profissional: req.body.experiencia_profissional, incentivo_estudos: req.body.incentivo_estudos,
            consciencia_produtividade: req.body.consciencia_produtividade, funcionamento_empresa: req.body.funcionamento_empresa, escolha_profissional: req.body.escolha_profissional, 
            aprimorar_relacionamento: req.body.escolha_profissional, comentario: req.body.comentario,
            conceito_estagiario: req.body.conceito_estagiario, iniciativa_estagiario: req.body.iniciativa_estagiario, relacionamento_gestor: req.body.relacionamento_gestor, 
            alcance_objetivos: req.body.alcance_objetivos, organizacao_estagiario: req.body.organizacao_estagiario, conhecimento_pratica: req.body.conhecimento_pratica, 
            novas_habilidades: req.body.novas_habilidades, comentario_supervisor: req.body.comentario_supervisor, situacao_matricula: req.body.situacao_matricula,
            frequencia_estudante: req.body.frequencia_estudante, tipo_estagio: req.body.tipo_estagio, comentarios_pedagogicos: req.body.comentarios_pedagogicos });

            return res.json(estagiario);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    

    async show(req, res) {
        try {
            const { cpf } = req.params;

            if (!cpf) {
                return res.status(400).json({
                    errors: ['Faltando CPF'],
                });
            }

            const estagiario = await Rae.findOne({ where: { cpf } });

            if (!estagiario) {
                return res.status(400).json({
                    errors: ['Estagiário não encontrado.'],
                });
            }

            return res.json(estagiario);

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }

            const estagiario = await Rae.findByPk(id);

            if (!estagiario) {
                return res.status(400).json({
                    errors: ['Estagiario não existe.'],
                });
            }

            await estagiario.destroy();
            return res.json({
                apagado: true,
            });

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }

    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }

            const estagiario = await Rae.findByPk(id);

            if (!estagiario) {
                return res.status(400).json({
                    errors: ['Estagiario não existe.'],
                });
            }

            const estagiarioAtualizado = await estagiario.update(req.body);

            return res.json(estagiarioAtualizado);

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }

    }
}

export default new RaeController();