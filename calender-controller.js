/**
 * Created by Thanusha on 1/14/2017.
 */
(function(){
    'use strict';
    angular.module('calender-app',['mwl.calendar', 'ui.bootstrap','ngAnimate', 'colorpicker.module']);

    angular.module('calender-app').controller('CalenderController',CalenderControllerFn)

    CalenderControllerFn.$inject = ['calendarConfig','moment'];
    function CalenderControllerFn(calendarConfig,moment){
        var ccVm =this;

        //attributes of calender needed to display calender
        ccVm.calendarView = 'month';
        ccVm.currentDate = new Date();
        ccVm.cellIsOpen = true;

        //Event added to current date
        ccVm.events = [
            {
                title: 'My Birthday',
                startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
                draggable: true,
                resizable: true,
            },
        ];


        ccVm.addEvent = function() {
            ccVm.events.push({
                title: 'Type new event',
                startsAt: moment().startOf('day').toDate(),
                endsAt: moment().endOf('day').toDate(),
                color: calendarConfig.colorTypes.important,
                draggable: true,
                resizable: true
            });
        };

        ccVm.toggle = function($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
        };
    }


})();