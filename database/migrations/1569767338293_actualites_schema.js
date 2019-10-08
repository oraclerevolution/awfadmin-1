'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActualitesSchema extends Schema {
  up () {
    this.create('actualites', (table) => {
      table.increments()
      table.string('title', 70).notNullable()
      table.text('article', 24).notNullable()
      table.string('photo', 2000).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('actualites')
  }
}

module.exports = ActualitesSchema
