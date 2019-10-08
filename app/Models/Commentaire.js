'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Commentaire extends Model {

    user () {
        return this.belongsTo('App/Models/User')
      }
    actualite () {
        return this.belongsTo('App/Models/Actualite')
    }  
}

module.exports = Commentaire
