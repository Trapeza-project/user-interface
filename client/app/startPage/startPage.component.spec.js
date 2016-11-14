'use strict';

describe('Component: StartPageComponent', function() {
  // load the controller's module
  beforeEach(module('userInterfaceApp.startPage'));

  var StartPageComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    StartPageComponent = $componentController('startPage', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
