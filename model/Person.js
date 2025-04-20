const Person = function (name, age, location) {
  if (!new.target) throw Error('You must use the new word')

  this.id = crypto.randomUUID()
  this.name = name
  this.age = age
  this.location = location
}

Person.prototype.toString = function () {
  return `Person info:\nbook_id: ${this.id}\ntitle: ${this.name}\nauthor: ${this.age}\nyear: ${this.location}\n`
}

export const createPersonAndAddToTheList = function (name, age, location, list) {
  const person = new Person(name, age, location)
  list.push(person)

  return person
}

export default Person
