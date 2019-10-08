'use strict'

class TestController {
    home({ view }){
        return view.render('home')
    }
}

module.exports = TestController
