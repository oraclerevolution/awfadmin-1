'use strict'
const Speaker = use('App/Models/Speaker')
const Helpers = use('Helpers')
const uuid = require('uuid/v4')

class SpeakerController {
   async ShowSpeakers ({ view }){
        const speakers = await Speaker.pair('id', 'name')

        return view.render('speakers', { speakers})
    }
   
    async store ({request, response,auth ,session}){
        const user = auth.user 

        const image = request.file('image', {
            types: ['image'],
            size: '2mb'
        })

        await image.move(Helpers.publicPath('uploads/images'), {
            name: `${uuid()}.${image.subtype}`
        })
        
        if (!image.moved()){
            session.flash({ 
                notification: {
                    type: danger,
                    message: image.error().message
                }
             })
             return response.redirect('back')
        }
        const speaker = new Speaker()

        speaker.name = request.input('name')
        speaker.fonction = request.input('fonction')
        speaker.image = `uploads/images${image.fileName}`
        await user.speakers().save(speaker)

        session.flash({ notification: {
            type: 'sucess',
            message: 'podcast created'
        }
     })

     return response.route('speakers')
    }
}

module.exports = SpeakerController
