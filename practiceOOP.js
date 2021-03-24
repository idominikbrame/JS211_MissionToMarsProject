'use strict';
const assert = require('assert');


class SoccerPlayer {
  constructor(name, position, specialSkill) {
    this.name = name;
    this.position = position;
    this.specialSkill = specialSkill;
    this.assignedClub;
  }
}

class SoccerClub{
  
}





// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function'){
  describe('SoccerPlayer', function(){
    it('should have a name, a position, a specialSkill and club upon instantiation', function(){
      // this creates a SoccerPlayer and passes the following arguments into its constructor:
      // 'Rick Martinez', 'Striker', 'Penalty kicks'
      const soccerPlayer = new SoccerPlayer('Rick Martinez', 'Striker', 'Penalty kicks');
      assert.equal(soccerPlayer.name, 'Rick Martinez');
      assert.equal(soccerPlayer.position, 'Striker');
      assert.equal(soccerPlayer.specialSkill, 'Penalty kicks');
      assert.equal(soccerPlayer.assignedClub, null);
    });





    it('can enter a club', function(){
      // this creates a new SoccerClub. Can you build a class that can be called so that this Club can be built?
      let fcb = new SoccerClub('Football Club Barcelona', 'EuroLeague', 'Spain');
      const soccerPlayer = new CrewMember('Rick Martinez', 'Striker', 'Penalty kicks');
      soccerPlayer.enterClub(fcb);
      assert.equal(soccerPlayer.assignedClub, fcb);
      assert.equal(fcb.teamMembers.length, 1);
      assert.equal(fcb.teamMembers[0], soccerPlayer);
    });
  });






  describe('SoccerClub', function(){
    it('should have a name, a league it primarily plays in, a country from which it comes, and an empty team upon instantiation', function(){
      let fcb = new Club('Football Club Barcelona', 'EuroLeague', 'Spain');
      assert.equal(fcb.name, 'Football Club Barcelona');
      assert.equal(fcb.league, 'EuroLeague');
      assert.equal(fcb.country, 'Spain');
      assert.equal(fcb.teamMembers.length, 0);
    });






    // it('can return a state for being ready to play correctly', function(){
      
    // });
  });
}