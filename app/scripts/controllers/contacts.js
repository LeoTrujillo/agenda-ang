'use strict';

/**
 * @ngdoc function
 * @name agendaApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the agendaApp
 */
angular.module('agendaApp')
  .controller('ContactsCtrl', function ($scope) {

    $scope.contacts = [{
            'name' : 'Camila',
            'last' : 'Cabello',
            'phone' : '334-2345675',
            'email' : 'camila@gmail.com',
            'avatar' : 'http://static.tumblr.com/f96adb58f7e48b8c2e205667e65d4eef/wjsxpij/WSon9lzmw/tumblr_static_58c36nbw9t448c8swowows0gw.jpg'
          },
          {
            'name' : 'Chole',
            'last' : 'Grace',
            'phone' : '555-9863235',
            'email' : 'chloe@gmail.com',
            'avatar' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c16.0.160.160/p160x160/1238720_1391194691127301_231730859_n.jpg?oh=c6d1fbfd5de2a418dd8bb763027a6c3e&oe=54F61E9E&__gda__=1424551901_252ef248be5fcee3d0731b6e51a08d79'
          },
          {
            'name' : 'Elle',
            'last' : 'Fanning',
            'phone' : '226-5121213',
            'email' : 'elle_blackshadow@hotmail.com',
            'avatar' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/1535674_212509762267728_918749169_n.jpg?oh=7c033fa14c5d56b6429317eab0183f4a&oe=54DCF8CC&__gda__=1425246052_6a44cb4db2974dd1eead34a056c89b71'
          },
          {
            'name' : 'Livia',
            'last' : 'Brito',
            'phone' : '445-6676795',
            'email' : 'lamalabrito@hotmail.com',
            'avatar' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c28.28.347.347/s160x160/250180_351735581584583_1962506916_n.jpg?oh=80337ee9338e4d8f9a9bb660e8d36c00&oe=54DBD887&__gda__=1423591876_b224c5e8a436e3ac6be12bbfbd3bcd0f'
          },
          {
            'name' : 'Ryan',
            'last' : 'Newman',
            'phone' : '999-16665434',
            'email' : 'new_man@yahoo.com',
            'avatar' : 'https://fbexternal-a.akamaihd.net/safe_image.php?d=AQAdrtCMScE7i-Vh&w=103&h=103&url=https%3A%2F%2Ffbcdn-profile-a.akamaihd.net%2Fhprofile-ak-frc3%2Fv%2Ft1.0-1%2Fc1.79.561.561%2Fs200x200%2F582013_10153515371795191_374671067_n.png%3Foh%3D8bba0a3697020d75a1d6ad5051da97dd%26oe%3D54D68637%26__gda__%3D1423841700_259732dca1b52f6b0b3d4b37ec1380b6&cfs=1&upscale=1'
          }
        ];
  });
