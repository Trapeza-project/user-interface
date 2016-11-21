'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './personalPage.routes';

export class PersonalPageComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('userInterfaceApp.personalPage', [uiRouter])
  .config(routes)
  .component('personalPage', {
    template: require('./personalPage.html'),
    controller: PersonalPageComponent,
    controllerAs: 'personalPageCtrl'
  })
  .name;
