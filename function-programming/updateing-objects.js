let person = { name: 'Mohammed', age: 28, address: { city: 'Tor Sina', postalCode: '12345678' } }
// when we need to update the name now we should not update it like `person.name` bcoz this will mutate
// the default object but we need to take a copy first and then update the copy

// 1
let updatedPerson = Object.assign({}, person, { name: 'zanaty', age: 30 })

// 2 update with spread operator .. name will overwrite the name in person
let updatedPerson2 = {...person, name: "younes", age: 2 }

console.log(person)
console.log(updatedPerson)
console.log(updatedPerson2)

// but be careful here as now this happen by shallow copy what I mean here let's say we add and address property to the person
// and update the city if we make it like
// updatedPerson2.address.city = 'Sharm El sheikh'
// it will be wrong as we need to do deep copy this time for nested objects so it should be like
updatedPerson2 = {
    ...updatedPerson2,
    address: {
        ...person.address,
        city: 'Sharm El sheikh'
    }
}
console.log(person)
console.log(updatedPerson2)