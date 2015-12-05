angular.module('starter.services', [])

  .service('MotivesService', function () {

          return {

              createMotive: function (_data) {

                  var Motive = Parse.Object.extend("Motives");
                  var motive = new Motive();
                  motive.set("title", _data.title);
                  motive.set("foursquareId", _data.foursquareId);
                  motive.set("date", _data.date);
                  motive.set("location", _data.location);
                  motive.set("attendees", _data.attendees);
                  // should return a promise
                  return motive.save({});

              },

          }
    });