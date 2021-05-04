const { Usuario } = require('../models')
module.exports = async (request, response, next) => {

    const { email, nome, senha } = req.body;

    const usuarioLogin = await Usuario.findAll({ where: { email } })

    if (usuarioLogin.length) {
        res.status(400).render({ erro: "Email já cadastrado" });
        return;
    } else {
        if (!email.length) {
            res.status(400).render({ erro: "Email não preenchido" });
            return;
        }
        if (!nome.length) {
            res.status(400).render({ erro: "Nome não preenchido" });
            return;
        }
        if (!senha.length) {
            res.status(400).render({ erro: "Senha não preenchido" });
            return;
        }
        if (senha.length < 6 || senha.length > 12) {
            res.status(400).render({ erro: "A senha precisa ter entre 6 e 12 caracteres" });
            return;
        }
        next();
    }
}