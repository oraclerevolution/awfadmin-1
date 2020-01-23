'use strict'


const Database = use('Database')
const Helpers = use('Helpers')

class TestController {
    async home({ view }){
        const totalActualites = await Database
            .from('actualites')
            .getCount()
        
        const totalUsers = await Database
            .from('users')
            .getCount()

        const totalSpeakers = await Database
            .from('speakers')
            .getCount()
        
        const totalThematique = await Database
            .from('thematiques')
            .getCount()    

        console.log(totalActualites)
        return view.render('home', {totalActu: totalActualites,
                                    totalUsers: totalUsers, 
                                    totalSpeakers : totalSpeakers, 
                                    totalThematique : totalThematique })
    }
}

module.exports = TestController
