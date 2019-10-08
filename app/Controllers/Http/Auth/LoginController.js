'use strict'



class LoginController {
    showLogin({view}){
        return view.render('auth.login')
    }
    async login ({ request, session, response, auth }){
        const { email, password} = request.all()

        try {
            await auth.attempt(email, password)

            return  response.route('home')
        } catch (error) {
            session.flash({ notification: {
                type: 'danger',
                massage: 'hee sa passe pas encore'
            } 
        })
        return response.redirect('/')
        }
    }
}

module.exports = LoginController
