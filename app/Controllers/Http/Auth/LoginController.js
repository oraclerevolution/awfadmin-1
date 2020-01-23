'use strict'


const User = use('App/Models/User');
const Helpers = use('Helpers')

class LoginController {
    showLogin({view}){
        return view.render('auth.login')
    }
    showRegister({view}){
        return view.render('auth.register')
    }
    async create({ request, response, auth}) {
        const user = new User
        user.username = request.input('username')
        user.email = request.input('email')
        user.password = request.input('password')

        user.save()
        return response.redirect('/');
    }
    async login ({ request, session, response, auth }){
        const { email, password } = request.all()

        try {
            await auth.attempt(email, password)
            return  response.redirect('/home')
        } catch (error) {
            session.flash({
                message: 'hee sa passe pas encore'
        })
        console.log(error)
        return response.redirect('/')
        }
    }
}



module.exports = LoginController
