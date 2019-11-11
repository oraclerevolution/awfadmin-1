'use strict'

const Helpers = use ('Helpers')
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

        
        const speaker = new Speaker();
        
        speaker.name = request.input('nom');
        speaker.fonction = request.input('fonction');
        speaker.biographie = request.input('msg');

        //process upload
        const photo = request.file('photo')
        
        speaker.photo = new Date().getTime()+'.'+photo.subtype

        await photo.move(Helpers.publicPath('uploads/images'),{
        name : speaker.photo
        }),
        await speaker.save();
       
        session.flash({ notification: 'Successfully create!' });
        return response.route('Speaker.speaker')
    }


    async edit({request, response, view, params}) {
        const id = params.id;
        const speaker = await Speaker.find(id);

        return view.render('editss', {speaker : speaker})
    }

    async update({request, response, view, params, session}) {
        const id = params.id;
        const speaker = await Speaker.find(id);
        speaker.name = request.input('nom'),
        speaker.fonction = request.input('fonction'),
        speaker.biographie = request.input('msg'),
        await speaker.save();

        session.flash({ notification: 'Successfully update!' });
        response.redirect('/speakers')
    }

    async delete({request, response, view, params, session}) {
        const id = params.id;
        const speaker = await Speaker.find(id);
        await speaker.delete();

        session.flash({ notification: 'Successfully delete!' });
        response.redirect('/speakers')
    }
}

module.exports = SpeakerController
