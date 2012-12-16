window.App = Ember.Application.create({
	ApplicationView : Ember.View.extend({
		templateName: 'application'
	}),
	ApplicationController : Ember.Controller.extend({
		title: 'My NodeJs Express Sample Ember App'
	}),
	CarsView : Ember.View.extend({
		templateName: 'cars'
	}),
	CarsController : Ember.Controller.extend(),
	ShoesView: Ember.View.extend({
		templateName: 'shoes'
	}),
	ShoesController : Ember.Controller.extend(),
	ready: function(){
		console.log("Created App Namespace");
	},
	Router: Ember.Router.extend({
		enableLogging: true,
		goToCars: Ember.Route.transitionTo('root.cars'),
		goToShoes: Ember.Route.transitionTo('root.shoes'),
		root: Ember.Route.extend({
			index: Ember.Route.extend({
				route: '/',
				enter: function(router){
					console.log('/ route entered');
				}
			}),
			shoes: Ember.Route.extend({
				route: '/shoes',
				enter: function(router){
					console.log('/shoes route entered');
				},
				connectOutlets: function(router, context){
					router.get('applicationController').connectOutlet('body', 'shoes');
				}
			}),
			cars: Ember.Route.extend({
				route: '/cars',
				enter: function(router){
					console.log('/cars route entered');
				},
				connectOutlets: function(router, context){
					router.get('applicationController').connectOutlet('body', 'cars');
				}
			})
		})
	})
});

App.initialize();
