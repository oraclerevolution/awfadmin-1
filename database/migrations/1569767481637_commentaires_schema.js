'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentairesSchema extends Schema {
  up () {
    this.create('commentaires', (table) => {
      table.increments()
      table.string('commentaire', 80).notNullable()
      table.integer('actualite_id').unsigned().references('id').inTable('actualites')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('commentaires')
  }
}

module.exports = CommentairesSchema
