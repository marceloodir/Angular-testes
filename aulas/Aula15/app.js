angular.module('BeMEAN', ['ngAnimate', 'ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UserController',
        controllerAs: 'User'
      })
      .when('/users/:id', {
        templateUrl: 'views/users-details.html',
        controller: 'UserDetailsController',
        controllerAs: 'UserDetails'
      })
      .otherwise({
        redirectTo: '/index'
      });
  })
  .controller('UserController', UserController)
  .controller('UserDetailsController', UserDetailsController);

function UserController() {
  var vm = this;
  vm.editing = false;
  vm.titulo = "Be MEAN - Usuários";
  vm.users = [
    {name: 'Suissa', email: 'suissera@manoveio.com'}
  , {name: 'João', email: 'joao@macioesedoso.com'}
  , {name: 'Franciele', email: 'fran@quimica.com'}
  ];

  vm.add = add;
  function add(user) {
    vm.users.push(angular.copy(user));
    vm.limpar();
  }

  vm.remove = function(users) {
    vm.users = users.filter(function(cada_user) { return !cada_user.selecionado });
  }

  vm.edit = function(user, index) {
    vm.form = angular.copy(user);
    vm.form.index = index
    vm.editing = true;
  }

  vm.save = function(user) {
    vm.users[user.index] = angular.copy(user);
    delete vm.users[user.index].index;
    vm.editing = false;
    vm.limpar();
  }

  vm.limpar = function() {
    delete vm.form;
  }

  vm.default = function() {
    vm.editing = false;
    vm.limpar();
  }

}

function UserDetailsController($routeParams) {
  var vm = this;
  vm.id = $routeParams.id;
  console.log('route', vm.id);
  vm.editing = false;
  vm.titulo = "Be MEAN - Usuários";
  vm.users = [
    {name: 'Suissa', email: 'suissera@manoveio.com'}
  , {name: 'João', email: 'joao@macioesedoso.com'}
  , {name: 'Franciele', email: 'fran@quimica.com'}
  ];

  vm.add = add;
  function add(user) {
    vm.users.push(angular.copy(user));
    vm.limpar();
  }

  vm.remove = function(users) {
    vm.users = users.filter(function(cada_user) { return !cada_user.selecionado });
  }

  vm.edit = function(user, index) {
    vm.form = angular.copy(user);
    vm.form.index = index
    vm.editing = true;
  }

  vm.save = function(user) {
    vm.users[user.index] = angular.copy(user);
    delete vm.users[user.index].index;
    vm.editing = false;
    vm.limpar();
  }

  vm.limpar = function() {
    delete vm.form;
  }

  vm.default = function() {
    vm.editing = false;
    vm.limpar();
  }

}