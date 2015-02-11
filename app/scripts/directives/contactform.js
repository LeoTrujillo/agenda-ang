'use strict';

/**
 * @ngdoc directive
 * @name agendaApp.directive:contactForm
 * @description
 * # contactForm
 */
angular.module('agendaApp')
  .directive('contactForm', function () {
    return {
      restrict: 'E',
      templateUrl : 'partials/contact-form.html',

      controller : function ($scope){
        $scope.show = false;
        $scope.contact = {};


         $scope.showForm = function (){
           $scope.show= !$scope.show;
        };

        $scope.addContact = function () {
          $scope.contacts.push($scope.contact);
          $scope.contact = {};
        };
      }
    };
  });
