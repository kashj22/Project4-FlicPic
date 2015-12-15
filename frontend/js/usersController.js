angular
  .module('users')
  .controller('usersController', UserController)

  UserController.$inject = ['User', 'TokenService']
  function UserController(User, TokenService) {
    var self = this;

    self.all = [];
    self.user = {};

    function handleLogin(res) {
      var token = res.token ? res.token : null;

      if(token) {
        console.log(res);

        self.getUsers();
        self.user = TokenService.getUser();
      }

      self.message = res.message;
    }

    self.login = function(){
      User.login(self.user, handleLogin);
    }

    self.register = function() {
      console.log('Registered');
      User.register(self.user, handleLogin);
    }

    self.logout = function () {
      TokenService.removeToken();
      self.all = [];
      self.user = {};
    }

    self.getUsers = function() {
      User.query(function(data) {
        self.all = data.users;
      });
    }

    self.isLoggedIn = function() {
      return !!TokenService.getToken();
    }
    if (self.isLoggedIn ()){
      self.getUsers();
      self.user = TokenService.getUser();
    }
  }








