'use strict'

//const Thematique = ('App/Models/Thematique')
//class ThematiqueController {
    //async ShowThematique({view}) {


        // Fetch all user's thematiques
        //return view.render('thematique')
    //}

    //async create({ request, response, session, auth}) {
        //const thematique = request.all();

        //const posted = await auth.user.thematiques().create({
            //name: thematique.name,            
        //});

        //session.flash({ message: 'Your thematique has been posted!' });
        //return response.redirect('back');
    //}

    //async delete({ response, session, params}) {
        //const thematique = await thematique.find(params.id);

        //await thematique.delete();
        //session.flash({ message: 'Your thematique has been removed'});
        //return response.redirect('back');
    //}

    //async edit({ params, view }) {
        //const thematique = await thematique.find(params.id);
        //return view.render('edit', { thematique: thematique });
    //}

    //async update ({ response, request, session, params }) {
        //const thematique = await thematique.find(params.id);

        //thematique.name = request.all().title;

        //await thematique.save();

        //session.flash({ message: 'Your thematique has been updated. '});
        //return response.redirect('thematique');
    //}
//}

const Thematique = use('App/Models/Thematique');
class ThematiqueController {
     async index({view, request, response}) {
        const thematiques = await Thematique.all();
          
        //Fetch all user's thematiques
        return view.render('thematique', { thematiques: thematiques.rows})
    }
   // async index({request, response, view}) {
        //const thematique = await Thematique.all();
    
        //return view.render('index', { thematique: thematique.rows})
    //}

    create({request, response, view}) {
        return view.render('thematique')
    }

    async store({request, response, view, session}) {
        const thematique = new Thematique();
        //const posted = await auth.user.thematiques().create({
            //name: thematique.name,            
        //});

        thematique.name = request.input('name');
        await thematique.save();
        //return response.json(thematique);

        session.flash({ notification: 'Successfully create!' });
        return response.route('Thematique.thematique')
    }

    async edit({request, response, view, params}) {
        const id = params.id;
        const thematique = await Thematique.find(id);

        return view.render('edit', {thematique : thematique})
    }

    async update({request, response, view, params, session}) {
        const id = params.id;
        const thematique = await Thematique.find(id);
        thematique.name = request.input('name'),
        await thematique.save();

        session.flash({ notification: 'Successfully update!' });
        response.redirect('/thematique')
    }

    async delete({request, response, view, params, session}) {
        const id = params.id;
        const thematique = await Thematique.find(id);
        await thematique.delete();

        session.flash({ notification: 'Successfully delete!' });
        response.redirect('/thematique')
    }
}

module.exports = ThematiqueController
