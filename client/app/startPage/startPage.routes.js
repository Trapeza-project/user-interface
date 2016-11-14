'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('startPage', {
      url: '/',
      template: '<start-page></start-page>'
    });
}
