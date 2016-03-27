'use strict';

angular.module('mathApp.auth', [
  'mathApp.constants',
  'mathApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
