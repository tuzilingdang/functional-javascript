var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers)

function checkUsersValid(goodUsers) {
  return function(checkUsers){
    return checkUsers.every( item => {
          return goodUsers.some( ele => {
              resolutionturn ele.id === item.id
          }) 
    })
  }
}

// ------------------ 测试数据 -----------------------------
console.log(testAllValid([
  { id: 2 },
  { id: 1 }
]))
// => true

console.log(testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
]))