'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReseausSchema extends Schema {
  up () {
    this.create('reseaus', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('email', 50).notNullable().unique()
      table.string('sujet', 100).notNullable()
      table.text('message').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('reseaus')
  }
}

module.exports = ReseausSchema
