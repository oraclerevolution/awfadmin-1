'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adoadonis make:validator LoginUsernisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.get('login', 'Auth/LoginController.login').as('login')

Route.get('home', 'TestController.home').as('home')
Route.get('article', 'ActualiteController.ShowActualite')
Route.get('/allreseaux', 'ReseauController.showForm')
//Route.get('thematique', 'ThematiqueController.ShowThematique').as('thematique')
//Route.post('/thematique', 'ThematiqueController.create')

Route.get('speakers', 'SpeakerController.ShowSpeakers')

Route.post('logout', 'Auth/LogoutController.logout').as('logout')

Route.get('/', 'Auth/LoginController.showLogin')
Route.post('login', 'Auth/LoginController.login').validator('LoginAdmin')

Route.resource('speakers', 'SpeakerController').except(['index, show']).validator(new Map ([
    [['Speakers.store'],['storeSpeaker']]
]))

//ajout thematique
/*
Route.get('/thematique/delete/:id', 'ThematiqueController.delete');
Route.get('/thematique/edit/:id', 'ThematiqueController.edit');
Route.post('/thematique/update/:id', 'ThematiqueController.update')
//routes
//Route.get('/login', 'UserController.login')
*/

//ajout thematique
Route.get('/thematique', 'ThematiqueController.index').as('Thematique.index')
Route.get('/thematique', 'ThematiqueController.thematique').as('Thematique.thematique')
Route.post('/thematique', 'ThematiqueController.create')
Route.get('/edit/:id', 'ThematiqueController.edit').as('Thematique.edit')
//Route.post('/thematique', 'ThematiqueController.create')
Route.get('/delete/:id', 'ThematiqueController.delete').as('Thematique.delete')
Route.post('/store', 'ThematiqueController.store').as('Thematique.store')
//Route.post('/update/:id', 'ThematiqueController.update').as('Thematique.update')
Route.post('/update/:id', 'ThematiqueController.update').as('Thematique.update')