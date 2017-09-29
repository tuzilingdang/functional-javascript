function getShortMessages(messages) {
  // SOLUTION GOES HERE
  var result = messages.filter(function(obj){
  	return obj.message.length < 50;
  }).map(function(value){
  	return value.message;
  });
  return result;
}

module.exports = getShortMessages;
// var messages = [
// 	{message: 'Esse id amet quis eu esse aute officia ipsum.'},
// 	{message: 'Esse id amet quis eu esse aute officia ipsum.Esse id amet quis eu esse aute officia ipsum.Esse id amet quis eu esse aute officia ipsum.Esse id amet quis eu esse aute officia ipsum.'},
// 	{message: 'Esse id amet quis eu esse aute officia ipsum.'},
// 	{message: 'Esse id amet quis eu esse aute officia ipsum.'},
// ];

// var result = getShortMessages(messages);
// console.log(result);