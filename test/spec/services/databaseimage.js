'use strict';

describe('Service: DataBaseImage', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // Get a reference to the service
  // instantiate service
  var DataBaseImage;
  beforeEach(inject(function (_DataBaseImage_) {
    DataBaseImage = _DataBaseImage_;
  }));

//  it('should do something', function () {
//    expect(!!DataBaseImage).toBe(true);
//  });

  describe('Public API functions', function(){
  //tests if the API functions exists only use new "it"
    it('should include a getUserByUserId() function', function(){
      expect(DataBaseImage.getUserByUserId).toBeDefined();
    });
    it('should include a getAllUsers() function', function(){
      expect(DataBaseImage.getAllUsers).toBeDefined();
    });
    it('should include a createNewUser() function', function(){
      expect(DataBaseImage.createNewUser).toBeDefined();
    });
  });

  describe('Public API usage', function(){
    //test if the API functions are working use a new describe for each function
    describe('getUserByUserId()', function(){
      it('should return the proper user object (valid userId)', function(){
        var userId = 1,
        user = DataBaseImage.getUserByUserId(userId);
        expect(user.username).toBe('youchra');
      });
      it('should return null', function(){
        var userId = two,
        user = DataBaseImage.getUserByUserId(userId);
        expect(user).toBeNull();
      });
    });
    describe('getAllUsers()', function(){
      it('should return the proper array of user objects', function(){
        var users = DataBaseImage.getAllUsers();
        expect(users.length).toBe(5);
      });
    });
    describe('createNewUser()', function(){
      it('should create a new user properly', function(){
        var user = createExampleUser();
        DataBaseImage.createNewUser(user);
        var test = DataBaseImage.getUserByUserId(user.userId);
        expect(test.username).toBe(user.username);
      });
    });

  });


  // helper function

  var createExampleUser = function(){
    var exampleUser = {
      userID: 999, // 0 - * index of user (INTEGER)
      displayName: 'ExampleUser', //The display name of the user
      username: 'exampleuser' //username of the user. Used for logging in
      userpw: 'exampleuser', //userpassword. Used for logging in
      player: true, //Is player in a league or not (BOOLEAN)
      playerRank: 1, //The Rank of the player: 0 = no player, 1 = sub, 2 = player, 3 = viceCaptain, 4 = captain (INTEGER)
      staff: false, //is staff member or not (BOOLEAN)
      staffRank: 0 // The rank 10 = admin for now (INTEGER)
    };
  DataBaseImage.createNewUser(exampleUser);
  return exampleUser;
  };

});
