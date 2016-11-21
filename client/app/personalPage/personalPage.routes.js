'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('personalPage', {
      url: '/personal',
      template: '<personal-page></personal-page>'
    });
}
