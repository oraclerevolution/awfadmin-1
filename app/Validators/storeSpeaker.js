'use strict'

class storeSpeaker {
  get validateAll (){
    return true
  }


  get rules () {
    return {
      name: 'required',
      fonction: 'required',
      description: 'required',
      // validation rules
    }
  }
}

module.exports = storeSpeaker
