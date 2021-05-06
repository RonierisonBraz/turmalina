module.exports = (request, response, next) => {
    if(request.session.usuarioLogado != null){
        next();
    }
    else{
        response.redirect('http://localhost:3000/usuario/login');
    }
}