'use strict'

const Actualite = use('App/Models/Actualite');
class ActualiteController {

    //ShowActualite({view}){
        //return view.render('article')
    //}

    async index({view, request, response}) {
        const actualites = await Actualite.all();
          
        //Fetch all user's thematiques
        return view.render('article', { actualites: actualites.rows})
    }

    create({request, response, view}) {
        return view.render('actualite')
    }

    async store({request, response, view, session}) {
        const actualite = new Actualite();
        //const posted = await auth.user.thematiques().create({
            //name: thematique.name,            
        //});

        actualite.name = request.input('name');
        await actualite.save();
        //return response.json(thematique);

        session.flash({ notification: 'Successfully create!' });
        return response.route('Actualite.actualite')
    }

    async edit({request, response, view, params}) {
        const id = params.id;
        const actualite = await Actualite.find(id);

        return view.render('edit', {actualite : Actualite})
    }

    async update({request, response, view, params, session}) {
        const id = params.id;
        const actualite = await Actualite.find(id);
        actualite.name = request.input('name'),
        await actualite.save();

        session.flash({ notification: 'Successfully update!' });
        response.redirect('/article')
    }

    async delete({request, response, view, params, session}) {
        const id = params.id;
        const actualite = await Actualite.find(id);
        await actualite.delete();

        session.flash({ notification: 'Successfully delete!' });
        response.redirect('/article')
    }

}

module.exports = ActualiteController
