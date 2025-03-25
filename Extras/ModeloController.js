import UserRae from '../models/UserRae';

class UserRaeController {
    async store(req, res) {
        try {
            const novoUserRae = await UserRae.create(req.body);
            const { id, nome_estagiario, email, cpf } = novoUserRae;
           return res.json({ id, nome_estagiario, email, cpf });
        } catch (e) {
            return res.status(400).json({
               errors: e.errors.map((err) => err.message),
        });
        }

    }
     
    // Index
    async index(req, res){
        try {
            const users = await UserRae.findAll({ attributes: ['id', 'nome_estagiario', 'email', 'cpf'] });
            return res.json(users);
        } catch(e) {
            return res.json(null); 
        }
    }

    // Show
    async show(req, res){
        try {
            const user = await UserRae.findByPk(req.params.id);
            const { id, nome_estagiario, email, cpf } = user;
            return res.json({ id, nome_estagiario, email, cpf });
        } catch(e) {
            return res.json(null); 
        }
    }

    // Update
    async update(req, res){
        try {
            const user = await UserRae.findByPk(req.userId);

            if(!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                });
            }

            const novosDados = await user.update(req.body);
            const { id, nome_estagiario, email, cpf } = novosDados;
            return res.json({ id, nome_estagiario, email, cpf });
        } catch(e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
         });
        }
    }

    // Delete

    async delete(req, res){
        try {
            const user = await UserRae.findByPk(req.userId);

            if(!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                });
            }

            await user.destroy();
            return res.json(null);
        } catch(e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
         });
        }
    }
}

export default new UserRaeController();