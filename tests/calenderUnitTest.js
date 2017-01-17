/**
 * Created by Thanusha on 1/17/2017.
 */

describe('calenderApp', function() {
    var $controller;
    var $rootScope;
   beforeEach(module('calender-app'));
   beforeEach(inject(function($injector) {
       $rootScope = $injector.get('$rootScope');
       $controller = $injector.get('$controller');
       $scope = $rootScope.$new();
   }));

    beforeEach(inject(function($controller) {
        ccVm = $controller("CalenderController");
   }));
    ccVm.events = {
        title: "SprintPlanning",
        color: {
            primary: "#ad2121",
            secondary: "#fae3e3"
        },
        startsAt: "Fri Jan 13 2017 08:00:00 GMT-0600",
        endsAt: "Wed Jan 18 2017 23:59:59 GMT-0600",
        draggable: true
    }
    var x= 10;

    it('should create new event row', function() {
        expect(x).toBe(10);
    });
});