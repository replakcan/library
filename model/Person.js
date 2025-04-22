class Person {
  constructor(name, age, location) {
    this.id = crypto.randomUUID()
    this.name = name
    this.age = age
    this.location = location
  }

  toString() {
    return `Person info:\person_id: ${this.id}\nname: ${this.name}\nage: ${this.age}\nlocation: ${this.location}\n`
  }

  static createPersonAndAddToTheList(name, age, location, list) {
    const person = new Person(name, age, location)

    list.push(person)

    return person
  }
}

export default Person
