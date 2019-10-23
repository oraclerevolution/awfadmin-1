'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpeakersSchema extends Schema {
  up () {
    this.create('speakers', (table) => {
      table.increments()
      table.string('name', 20).notNullable()
      table.string('fonction', 200).notNullable()
      table.string('photo', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('speakers')
  }
}

module.exports = SpeakersSchema