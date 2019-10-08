'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Actualite extends Model {


commentaire () {
    return this.hasMany('App/Models/Commentaire')
    }
}

module.exports = Actualite
