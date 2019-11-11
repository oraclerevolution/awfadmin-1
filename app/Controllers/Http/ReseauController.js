'use strict'

const Reseau = use('App/Models/Reseau');
class ReseauController {
    async index({view, request, response}) {
        const reseaus = await Reseau.all();
          
        //Fetch all user's thematiques
        return view.render('reseaux',{ reseaus: reseauss.rows})
    }
}

module.exports = ReseauController
