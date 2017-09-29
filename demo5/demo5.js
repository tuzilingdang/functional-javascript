

module.exports = function checkUsersValid(goodUsers){
	return function(checkUsers){
		var resultUsers = checkUsers.filter(item => {
			var sameUsers = goodUsers.filter(value => {
				return value.id === item.id;
			});
			return sameUsers.length > 0 ? false :true;
		});
		return resultUsers.length > 0? false : true;
	};
};

// ------------------ 测试数据 -----------------------------
// var goodUsers = [
// 	{ id: 1},
// 	{ id: 2},
// 	{ id: 3}
// ];
// var testAllValid = checkUsersValid(goodUsers);

// var result1 = testAllValid([
// 	{ id: 1},
// 	{ id: 2}
// ]);

// var result2 = testAllValid([
// 	{ id: 1},
// 	{ id: 4},
// 	{ id: 3}
// ]);

// console.log(result1);
// console.log(result2);