'use strict'


const Speaker = use('App/Models/Speaker');
class SpeakerController {
     async index({view, request, response}) {
        const speakers = await Speaker.all();
          
        //Fetch all user's thematiques
        return view.render('speakers', { speakers: speakers.rows})
    }
    create({request, response, view}) {
        return view.render('speakers')
    }

    async store({request, response, view, session}) {
        const speakers = new Speaker();
        //const posted = await auth.user.thematiques().create({
            //name: thematique.name,            
        //});

        speakers.name = request.input('nom');
        speakers.fonction = request.input('fonction');
        speakers.photo = request.input('photo');
        await speakers.save();
        //return response.json(speaker);

        session.flash({ notification: 'Successfully create!' });
        return response.route('speakers')
    }

    async edit({request, response, view, params}) {
        const id = params.id;
        const speaker = await Speaker.find(id);

        return view.render('edit', {speaker : speaker})
    }

    async update({request, response, view, params, session}) {
        const id = params.id;
        const thematique = await Thematique.find(id);
        thematique.name = request.input('name'),
        await thematique.save();

        session.flash({ notification: 'Successfully update!' });
        response.redirect('/speakers')
    }

    async delete({request, response, view, params, session}) {
        const id = params.id;
        const thematique = await Thematique.find(id);
        await thematique.delete();

        session.flash({ notification: 'Successfully delete!' });
        response.redirect('/speakers')
    }
}

module.exports = SpeakerController
