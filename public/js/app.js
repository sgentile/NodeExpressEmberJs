window.App = Ember.Application.create({
	ApplicationView : Ember.View.extend({
		templateName: 'application',
		classNames: ['application-view']
	}),
	ApplicationController : Ember.Controller.extend({
		title: 'My NodeJs Express Sample Ember App'
	}),
	SalutationView : Ember.View.extend({
		templateName: 'salutation'
	}),
	SalutationController : Ember.Controller.extend(),
	TraversalView : Ember.View.extend({
		templateName: 'traversal'
	}),
	TraversalController : Ember.Controller.extend(),
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
		goHome: Ember.Route.transitionTo('index'),
		root: Ember.Route.extend({
			index: Ember.Route.extend({
				route: '/',
				enter: function(router){
					console.log('/ route entered');
				},
				connectOutlets: function(router, context){
					router.get('applicationController').connectOutlet('body', 'traversal');
				}
			}),
			shoes: Ember.Route.extend({
				route: '/shoes',
				enter: function(router){
					console.log('/shoes route entered');
				},
				connectOutlets: function(router, context){
					router.get('applicationController').connectOutlet('greeting', 'salutation',
						{greeting:"Shoes Route"});
					router.get('applicationController').connectOutlet('body', 'shoes');
					router.get('applicationController').connectOutlet('footer', 'traversal');
				}
			}),
			cars: Ember.Route.extend({
				route: '/cars',
				enter: function(router){
					console.log('/cars route entered');
				},
				connectOutlets: function(router, context){
					router.get('applicationController').connectOutlet('greeting', 'salutation', 
						{greeting:"Cars Route"});
					router.get('applicationController').connectOutlet('body', 'cars');
					router.get('applicationController').connectOutlet('footer', 'traversal');
				}
			})
		})
	})
});

App.initialize();
