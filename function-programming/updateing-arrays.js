const names = ['Mohammed', 'Younes', 'Farah']

// adding
const added = [...names, 'Yasmeen']
console.log(added)

// removing
const removed = names.filter(n => n !== 'Farah')
console.log(removed)

// updating
const updated = names.map(n => n === 'Mohammed' ? 'Elzanaty' : n)
console.log(updated)