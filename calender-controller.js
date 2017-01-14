/**
 * Created by Thanusha on 1/14/2017.
 */
(function(){
    'use strict';
    angular.module('calender-app',['mwl.calendar', 'ui.bootstrap']);

    angular.module('calender-app').controller('CalenderController',CalenderControllerFn)

    CalenderControllerFn.$inject = [];
    function CalenderControllerFn(){
        var ccVm =this;

        ccVm.calendarView = 'month';
        ccVm.currentDate = new Date();
        ccVm.title = "Current Month View"
        ccVm.cellIsOpen = true;

        ccVm.events = [
            {
                title: 'My Birthday',
                startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
                draggable: true,
                resizable: true,
            },
        ];


        ccVm.timespanClicked = function(date, cell) {

            if (ccVm.calendarView === 'month') {
                if ((ccVm.cellIsOpen && moment(date).startOf('day').isSame(moment(ccVm.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
                    ccVm.cellIsOpen = false;
                } else {
                    ccVm.cellIsOpen = true;
                    ccVm.viewDate = date;
                }
            } else if (ccVm.calendarView === 'year') {
                if ((ccVm.cellIsOpen && moment(date).startOf('month').isSame(moment(ccVm.viewDate).startOf('month'))) || cell.events.length === 0) {
                    ccVm.cellIsOpen = false;
                } else {
                    ccVm.cellIsOpen = true;
                    ccVm.viewDate = date;
                }
            }
        }
    }


})();