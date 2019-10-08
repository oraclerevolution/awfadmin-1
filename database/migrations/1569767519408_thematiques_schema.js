'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ThematiquesSchema extends Schema {
  up () {
    this.create('thematiques', (table) => {
      table.increments()
      table.string('name',255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('thematiques')
  }
}

module.exports = ThematiquesSchema
