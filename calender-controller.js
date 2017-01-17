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
        ccVm.hasDuplicates = false;
        //attributes of calender needed to display calender
        ccVm.calendarView = 'month';
        ccVm.currentDate = new Date();
        ccVm.cellIsOpen = true;

        //Event added to current date
        ccVm.events = [
            {
                title: 'Stop Car',
                color: calendarConfig.colorTypes.warning,
                startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
                draggable: true,
                resizable: true,
            }
        ];

        //Function which validates whether any events clashes and alerts accordingly
        ccVm.validate = function(){
            var seen = {};
            ccVm.hasDuplicates = ccVm.events.some(function (currentObject) {
                return seen.hasOwnProperty(currentObject.startsAt)
                    || (seen[currentObject.startsAt] = false);
            });
            if(ccVm.hasDuplicates == true){
                alert("Event already exists.Please create the event with different timings");
                ccVm.events.pop();
            }else{
                alert(ccVm.events.title +" is successfully created");
            }
        }

        // Function to add event
        ccVm.createEvent = function() {
                ccVm.events.push({
                    title: 'Type new event',
                    startsAt: moment().startOf('day').toDate(),
                    endsAt: moment().endOf('day').toDate(),
                    color: calendarConfig.colorTypes.important,
                    draggable: true,
                    resizable: true
                });
        };

        //Fucntion to get calender when calender icon is clicked in Add event table
        ccVm.toggle = function($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
            console.dir("$event:"+$event);
            console.log("field:"+field);
            console.log("event[field]:"+event[field]);

        };
    }


})();