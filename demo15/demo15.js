

   function loadUsers(userIds, load, done) {
      var users = []
	  var complete = 0
	  userIds.forEach(function(id, index){
		load(id, function(user){
			users[index] = user
			if( ++comlete === usersIds.length)
				return done(users)
		})
	  })
      return users
    }

    module.exports = loadUsers
