/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} **/
const Route = use('Route')

Route.post('/sessions', 'SessionController.store').validator('Session')
Route.post('/register', 'RegisterController.store')
Route.post('/forgot', 'ForgotPasswordController.store').validator('Forgot')
Route.post('/reset', 'ResetPasswordController.store').validator('Reset')
/*
Route.group(() => {
    Route.resource('events', 'EventController')
        .apiOnly()
        .except('get')
    Route.resource('categories', 'CategoryController').apiOnly()
    Route.resource('works', 'WorkController').apiOnly()
    Route.resource('users', 'UserController').apiOnly()
}).middleware('auth')
*/
