'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Thematique extends Model {
    admins() {
        return this.belongsTo('App/Models/Admin');
    }
}

module.exports = Thematique
