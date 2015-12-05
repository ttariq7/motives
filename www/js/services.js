angular.module('starter.services', [])

  .service('MotivesService', function () {

          return {

              createMotive: function (_data) {

                  var Motive = Parse.Object.extend("Motives");
                  var motive = new Motive();
                  motive.set("title", _data.title);
                  motive.set("description", _data.description);
                  motive.set("foursquareId", _data.foursquareId);
                  motive.set("date", _data.date);
                  motive.set("location", _data.location);
                  motive.set("attendees", _data.attendees);
                  // should return a promise
                  return motive.save({});

              },

              updateMotive: function (motive, _data) {
                  console.log(motive)
                  console.log(_data)
                  motive.set("title", _data.title);
                  motive.set("description", _data.description);
                  motive.set("foursquareId", _data.foursquareId);
                  motive.set("date", _data.date);
                  motive.set("location", _data.location);
                  motive.set("attendees", _data.attendees);
                  // should return a promise
                  return motive.save({});

              },

              deleteMotive: function (motive) {

                  // should return a promise
                  return motive.destroy({});

              },

              getMotives: function () {

                var Motive = Parse.Object.extend("Motives");
                var query = new Parse.Query(Motive);

                return query.find({});

              },

              getMotive: function (id) {

                var Motive = Parse.Object.extend("Motives");
                var query = new Parse.Query(Motive);
                return query.get(id, {});

              },

          }
    });