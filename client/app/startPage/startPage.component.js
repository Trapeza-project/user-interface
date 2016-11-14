'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './startPage.routes';

export class StartPageComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('userInterfaceApp.startPage', [uiRouter])
  .config(routes)
  .component('startPage', {
    template: require('./startPage.html'),
    controller: StartPageComponent,
    controllerAs: 'startPageCtrl'
  })
  .name;
