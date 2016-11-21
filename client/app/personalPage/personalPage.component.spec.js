'use strict';

describe('Component: PersonalPageComponent', function() {
  // load the controller's module
  beforeEach(module('userInterfaceApp.personalPage'));

  var PersonalPageComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PersonalPageComponent = $componentController('personalPage', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
