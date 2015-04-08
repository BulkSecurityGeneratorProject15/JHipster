'use strict';

angular.module('jhipApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
