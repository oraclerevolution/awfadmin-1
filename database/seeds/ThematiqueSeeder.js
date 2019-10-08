'use strict'

/*
|--------------------------------------------------------------------------
| ThematiqueSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ThematiqueSeeder {
  async run () {
    await Factory
      .model('App/Models/Thematique')
      .createMany(4)
  }
}

module.exports = ThematiqueSeeder
