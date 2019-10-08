'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Admin extends Model {
    thematiques() {
        return this.hasMany('App/Models/Thematique')
    }
}

module.exports = Admin
